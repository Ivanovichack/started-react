import React, { useState } from 'react';
import AddPersonForm from '../AddPersonForm/AddPersonForm';
import PeopleList from '../PeopleList/PeopleList';


function ContactManager(props){    
    const [contacts, setContacts] = useState(props.data);

    function addPerson(name){
        setContacts([...contacts, name]);
    }
    return(
        <div>
            <AddPersonForm handleSubmit={addPerson}/>
            <PeopleList data={contacts}/>
        </div>
    );
}

export default ContactManager;