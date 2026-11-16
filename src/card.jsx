function card({student}){
  return(
    <div className="card">
      <div className="card-body">
        <h2>{student.name}</h2>
        <p>Department:{student.department}</p>
        <p>Year:{student.year}</p>

      </div>
    </div>
  );
}
export default card;