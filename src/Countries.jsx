import { useEffect, useState } from "react";



const Card = ({name, flag, abbr}) => {
    return (
      <div
        style={{
             display:"flex",
             flexDirection:"column",
             textAlign:'center',
             alignItems:"center",
             justifyContent:'center',
             width:"200px",
             height:"200px",
             border:"1px solid #ccc",
             borderRadius:"10px",
             gap:"5px",
             marginTop:"10px",


        }}
      
      >
        <img src={flag} style={{width:'100px', height:'100px'}} alt={name}/>
        <h2>{name}</h2>
      </div>
    );
  };


export default function Countries() {
   const ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
   const [loading, setLoading] = useState(true);

   const [apiData, setApiData] = useState([]);


    useEffect(() => {
        fetch(ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
}, [])

    return (
        <>
           

           <div
            style={{
             display:"flex",
             flexWrap:"wrap",
             justifyContent:"center",
             textAlign:"center",
             gap:"10px"
             

            }}
        
           >

{loading ? (
  <p>Loading countries...</p>
) : (
  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", textAlign: "center", gap: "10px" }}>
    {apiData.map(({ name, flag, abbr }) => (
      <Card key={abbr} name={name} flag={flag} />
    ))}
  </div>
)}
           </div>
          


          

        </>
    );
}