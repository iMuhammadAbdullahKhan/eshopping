import { useState } from "react";
function products(){
//  const [membership,setMembership]=useState({id:"1", manufacturer: "Apple", price:"200" },
//  {id:"2", manufacturer: "Samsung", price:"20" }
//  );
 const [quiz, setQuiz]=useState(0);
 function handlemarks(){
    
 }

    return <div>
             {
            membership.map( (m) => (
            <div>
                {/* <h1>id:{ts.id}</h1>
            <h2> price:{ts.price}</h2> */}
            <h3>Quiz Marks: {quiz}</h3>
            <button onClick={handlemarks}>Click</button>
            </div>


            )) 
        }
            
            
        </div>;

   
}
export default products;