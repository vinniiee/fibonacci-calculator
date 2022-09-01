import { useEffect, useState } from "react";
import axios from "axios";

export const Fib = () => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState("");
  const [reload,setReload] = useState(false);

  useEffect(() => {
    const fetchValues = async () => {
      const values = await axios.get("/api/values/current");
      setValues(values.data);
    };

    const fetchIndexes = async () => {
      const seenIndexes = await axios.get("/api/values/all");
      setSeenIndexes(seenIndexes.data);
    };

    fetchIndexes();
    fetchValues();
  }, [reload]);

  const seenIndexesList = seenIndexes.map(({ number }) => number).join(",");

  let valuesList=[];
  for(const key in values){

    valuesList.push( <div key={key}>
      For index {key} I've calculated {values[key]}
    </div>);

  }


  // const valuesList = values.map((key) => {
  //   return (
  //     <div key={key}>
  //       For index {key} I calculated {values[key]}
  //     </div>
  //   );
  // });

  const submitHandler = async (event)=>{
    event.preventDefault();

    await axios.post('/api/values',{index:index});
    setIndex('');
    setReload(!reload);
  }


  return (<div>
    <form onSubmit={submitHandler}>
        <label>Enter your index:</label>
        <input value={index} onChange={(e)=> setIndex(e.target.value)}/>
        <button>Submit</button>
    </form>
    <h3>Indexes I have seen</h3>
    {seenIndexesList}

    <h3>Calculated values:</h3>
    {valuesList}
  </div>)




};
