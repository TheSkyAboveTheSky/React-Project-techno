import './ContactList.css';
import img from '../Login/login.png';
import axios from 'axios';


export default function ContactList({ contact }) {

    const handleDelete = async (e) => {
        e.preventDefault();
        const res = await axios.delete(`http://localhost:3000/api/contact/${contact._id}`, { headers: { 'Authorization': `Bearer ${localStorage.getItem('accessToken')}` } });
        console.log(res);
        window.location.reload();
    }

    return (
        <>

            <tr class="" id={contact._id}>
                <td class="width35 hidden-xs">
                    <a href="javascript:void(0);" class="mail-star"><i
                        class="fa fa-star"></i></a>
                </td>
                <td class="text-center width40">
                    <div class="avatar d-block">
                        <img class="avatar" src={img}
                            alt="avatar" />
                    </div>
                </td>
                <td>
                    <div><a href="javascript:void(0);">{contact.name}</a></div>
                    <div class="text-muted">{contact.mobile}</div>
                </td>
                <td class="hidden-xs">
                    <div class="text-muted"><a
                        href="https://nsdbytes.com/cdn-cgi/l/email-protection"
                        class="__cf_email__"
                        data-cfemail="107a7f787e637d79647850797e767f3e737f7d">{contact.email}</a>
                    </div>
                </td>
                <td class="hidden-sm">
                    <div class="text-muted">{contact.address}</div>
                </td>
                <td class="text-right">
                    <a class="btn btn-sm btn-link" href="javascript:void(0)"
                        data-toggle="tooltip" title="Phone"><i
                            class="fa fa-phone"></i></a>
                    <a class="btn btn-sm btn-link" href="javascript:void(0)"
                        data-toggle="tooltip" title="Mail"><i
                            class="fa fa-envelope"></i></a>
                    <button class="btn btn-sm btn-link hidden-xs js-sweetalert"
                        data-type="confirm" href="javascript:void(0)"
                        data-toggle="tooltip" title="Delete"><i
                            class="fa fa-trash" onClick={handleDelete}></i></button>
                </td>
            </tr>
        </>
    );
}