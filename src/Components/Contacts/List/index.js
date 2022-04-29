import {useState} from 'react'


function List({contacts}) {
  const[filterText, setFilterText]=useState('')
  
  const filtered= contacts.filter((contact=>{
    return Object.keys(contact).some((key)=>
      contact[key].toString().toLowerCase().includes(filterText.toLowerCase())
      
    )
  } )) 
  console.log(filtered);
  return (
<div>
  
<input  value={filterText} onChange={(e)=>{setFilterText(e.target.value)}} placeholder='filter contact' />

     <ul>
       {/* burası önceden contacts.map idi. formda yazılanı direk buraya almak amaçlı idi. sonra filter metdounu oluşturunca burayı filtered.map yaptık. filter kısmına hiçbişey yazmayınca tüm liste görünür. bir harf yazınca filtrelemeye başlar */}
       {filtered.map((contact, i)=>(
         <li key={i}>{contact.fullname} {contact.phone_number}</li>
       ))}
      
     </ul>

    
</div>
  )
}

export default List