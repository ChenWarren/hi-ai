import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { InputBox, List } from 'components'
import Fetcher from 'services/fetcher';
import { handleSaveToLocalStorage } from 'services/storageHandler';
import { useText, useUpdateData, useDeleteItem, useSelectLanguage } from 'context/AppContext';

function App() {
  const {text, setText}= useText()
  const { updateData } = useUpdateData()
  const { deleteItemID } = useDeleteItem()
  const { selectedLanguage, setSelectedLanguage } = useSelectLanguage()

  // Load init data
  useEffect(()=> {
    const savedText = localStorage.getItem(selectedLanguage)
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

  console.log('app', selectedLanguage)

  return (
    <div className='App'>
      <div className='App-container'>
        <h1>AI Learning</h1>
        <InputBox   
          handleSumit={handleSumit} 
          headerText="Easy Way To Learn Computer Programming!" 
          placeHolderText="Write your question here to get AI response..."
        />
          { text.length!==0 && <List   
            list={text} setList={setText} 
          />}
      </div>
    </div>
  );
}

export default App;


