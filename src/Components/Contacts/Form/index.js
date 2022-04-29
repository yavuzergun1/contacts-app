import {useState, useEffect} from 'react'

const initialFormValues= {fullname:'', phone_number:''}

function Form({addContact, contacts}) {
const  [form, setForm]= useState(/* {fullname:'', phone_number:''} */ initialFormValues);

useEffect(()=>{ 
    setForm(initialFormValues)
},[contacts])

const onChangeForm= (e)=>{setForm({...form, [e.target.name]:e.target.value})};

   const onSubmit= (e)=>{
       e.preventDefault();
       if (form.fullname==='' || form.phone_number===''){
           return false /* inputlar boşsa işlem yapma */
        }

       addContact([...contacts, form]);

    //    setForm(initialFormValues);
    // Yukarıda useEffect yerine burayı kullanarak da formu sıfırlayabiliriz.
   }
  return (
    <form onClick={onSubmit}>
       <div>
           <input name='fullname' 
           placeholder='Fullname' 
           onChange={onChangeForm}
           value= {form.fullname}
           />
       </div>
       <div>
           <input name='phone_number' 
           placeholder='Phone Number' 
           onChange={onChangeForm} 
           value={form.phone_number}
           />
       </div>

        <div>
            <button >Add</button>
        </div>

    </form>
  )
}

export default Form