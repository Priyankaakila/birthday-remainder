const Person = ({person}) => {
    const {name,image,age} = person;
    console.log(person)
    return (
        <li className="flex items-center justify-center gap-8 md:gap-10">
            <img className="shadow-md p-1 border-2 border-green-300 rounded-full w-16 lg:w-20  " src={image} alt={name} />
            <div className="">
                <h4 className="font-semibold lg:text-xl">{name}</h4>
                <p className="w-28 text-sm text-gray-600 lg:text-lg lg:w-36">{age} years</p>
            </div>
        </li>
    );
}

export default Person; 