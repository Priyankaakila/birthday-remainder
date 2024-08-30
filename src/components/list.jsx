import Person from "./person";
const ListContainer = ({people}) => {
    return (
        <ul className="flex flex-col items-center justify-center p-2 pb-4 gap-1">
            {people.map((person)=>{
                return <Person key={person.id} person={person} />
            })}
        </ul>
    );
}

export default ListContainer;