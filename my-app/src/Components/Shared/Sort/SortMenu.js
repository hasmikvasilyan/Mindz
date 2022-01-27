import './SortMenu.css'
function SortMenu(props){
    
    const handleChange=(e)=>{
        console.log(e.target.value);
        const sortedData=props.data.sort((a,b)=>b[e.target.value]-a[e.target.value]);
        props.onChange(sortedData);
    }
    return(
        <select className="sortMenu" onChange={handleChange}> 
            <option value="">Please select an option</option>
            {props.sortItems.map(item=>{
                return <option key={item.id} value={item.sortProperty}>{item.name}</option>
            })
        }           
        </select>
    )
}
export default SortMenu