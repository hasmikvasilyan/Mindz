import './SortMenu.css'
function SortMenu(props){
    
    const handleChange=(e)=>{
        const sortedData=props.data.sort((a,b)=>b[e.target.value]-a[e.target.value]);
        props.onChange(sortedData);
    }
    return(
        <select className="sortMenu" onChange={handleChange}> {
            props.sortItems.map(item=>{
                return <option key={item.id} value={item.sortProperty} >{item.name}</option>
            })
        }           
        </select>
    )
}
export default SortMenu