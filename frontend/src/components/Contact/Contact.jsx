import ContactList from '../ContactList/ContactList';
import './Contact.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Contact() {

    const [contacts, setContacts] = useState([]);


    useEffect(() => {
        const getContacts = async () => {
            const res = await axios.get('http://localhost:3000/api/contact', { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } });
            setContacts(res.data);
        }

        getContacts();
    }, [])


    return (
        <>
            <div >
                <ul className="nav nav-tabs page-header-tab ">
                    <li className="nav-item" ><a
                        style={window.location.pathname === '/contact' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        className={window.location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}
                        data-toggle="tab" href="/contact">Contact List</a></li>
                    <li className="nav-item"><a
                        className={window.location.pathname === '/contact-add' ? 'nav-link active' : 'nav-link'}
                        style={window.location.pathname === '/contact-add' ? { borderTop: "3px solid red" } : { color: "grey" }}
                        data-toggle="tab" href="/contact-add">Add Contact</a>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div class="table-responsive" id="users">
                    <table
                        class="table table-hover table-vcenter text-nowrap table_custom border-style list">
                        <tbody>
                            {contacts.map(c => (
                                <ContactList contact={c} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
}
