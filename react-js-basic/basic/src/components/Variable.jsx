const Variable = () => {
    let name = "virat kohli";
    let location = "delhi";
    let age = 37;
    let topic = "mern stack";
    //array
    let tech = ["mern", "mean", "next js", "reactnative", "aiml"];
    const techlist = [];
    tech.forEach((x, index) => {
        techlist.push(
            <li key={index}>{x}</li>
        );
    });
    const employees = [
        { id: 1, name: "raj", location: "kolkata" },
        { id: 2, name: "raj1", location: "kolkata" },
        { id: 3, name: "raj2", location: "kolkata" },
        { id: 4, name: "raj3", location: "kolkata" },
    ];

    return <>
        <p>Type: {typeof name}-Name:{name}</p>
        <p>Location: {location}</p>
        <p>Age: {age >= 30 ? "A category" : "B category"}</p>
        <ul>
            {techlist}
        </ul>

        <div>
            <table border={2} width="100%">
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Location</th>
                </tr>
                {
                    employees.map(x => (
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.location}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
        <footer>
            {`Today topic is ${topic}`}
        </footer>

    </>

}
export default Variable;