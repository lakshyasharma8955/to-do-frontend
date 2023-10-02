import axios from 'axios';

const baseurl = "http://localhost:5000";


//All Get Data in Frontend
const getAllToDo = (setToDo) =>
{
    axios.get(baseurl)
        .then(({ data }) =>
        {
            console.log('data --->', data);
            setToDo(data);
    })
}


// Add data in a frontend

const addToDo = (text, setText, setToDo) =>
{
    axios
      .post(`${baseurl}/save`, { text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllToDo(setToDo);
      })
      .catch((err) => console.log(err));
}
    

// Update data in a frontend

const updateToDo = (toDoId, text, setText, setToDo, setisUpdating) => {
  axios.post(`${baseurl}/update`, { _id: toDoId, text }).then((data) => {
      setText("")
      setisUpdating(false)
    getAllToDo(setToDo);
  })
    .catch((err) => console.log(err))
}

// delete data in a frontend

const deleteToDo = (_id,setToDo) => {
  axios.post(`${baseurl}/delete`, { _id}).then((data) => {
      console.log(data);
    getAllToDo(setToDo);
  })
    .catch((err) => console.log(err))
}
export { getAllToDo, addToDo, updateToDo, deleteToDo };
