import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header, Footer, InputBox, List } from 'components'
import Fetcher from 'services/fetcher';
import { handleSaveToLocalStorage } from 'services/storageHandler';
import { useText, useUpdateData, useDeleteItem, useSelectLanguage } from 'context/AppContext';

function App() {
  const {text, setText}= useText()
  const { updateData } = useUpdateData()
  const { deleteItemID } = useDeleteItem()
  const { selectedLanguage } = useSelectLanguage()

  // Load init data
  useEffect(()=> {
    const savedText = window.localStorage.getItem(selectedLanguage)
    if(savedText!==null && savedText!==undefined) {
      setText(JSON.parse(savedText))
    } else {
      setText([])
    }
  }, [selectedLanguage])

  // Updata data
  useEffect(()=>{
    if(updateData){
      const {index, data} = updateData
      const copyText = [...text]
      copyText[index] = data
      setText(copyText)
      handleSaveToLocalStorage(selectedLanguage, copyText)
    }
  }, [updateData])

  // Delete item
  useEffect(()=>{
    if(deleteItemID){
      const copyText = text.filter(item=>item.id!==deleteItemID)
      console.log(copyText)
      setText(copyText)
      handleSaveToLocalStorage(selectedLanguage, copyText)
    }
  }, [deleteItemID])
  
  // Sumit prompt and get response
  const handleSumit = async (promptText, language) => {
      const data = {
        prompt: `${promptText} ${language}`,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
      }
      const newID = uuidv4()
      const newDate = new Date();
      const res = await Fetcher(data)
      const conversation = { id: newID, prompt: promptText, response: res.result, create_date: newDate}
      setText(
      [conversation, ...text ]
      )
  }

  return (
    <div className='App'>
      <Header
        title="AI Learning" 
        headerText="AI help you learning Computer Programming!"
      />
      <div className='App-container'>
        <InputBox   
          handleSumit={handleSumit} 
          placeHolderText="Write your question here to get AI response..."
        />
          { text.length!==0 && <List   
            list={text} setList={setText} 
          />}
      </div>
      <Footer
        footerText="&copy; 2022-2023"
      />
    </div>
  );
}

export default App;


