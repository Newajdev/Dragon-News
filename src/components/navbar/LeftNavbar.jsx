import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNavbar = () => {
    const [Category, setCategory] = useState([])


    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then (data => setCategory(data)
        )
    }, [])

    

    return (
        <div className="mr-6">
            <h3 className="font-semibold text-xl ">All Caterogy</h3>
            {
                Category.map(cate => (<div key={cate.id} className="w-full hover:bg-gray-200 duration-500 rounded-sm  py-4 px-14">
                <NavLink  className="text-center text-xl font-semibold" to={`/`}>{cate.name}</NavLink>
                </div>))
            }
            
            
        </div>
    );
};

export default LeftNavbar;