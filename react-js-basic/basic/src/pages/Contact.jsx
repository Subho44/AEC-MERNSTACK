import { useSearchParams } from "react-router-dom"

const Contact = () => {
    const [searchparams] = useSearchParams();
    const name = searchparams.get("name");
    const city = searchparams.get("city");
    const course = searchparams.get("course");

  return <>
  <div className="card bg-dark text-light col-md-3">
    <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p className="card-text">Course:{course}</p>
        
        <p className="card-text">City:{city}</p>
    </div>
  </div>
  
  
  </>
}

export default Contact