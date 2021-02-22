import { useState, useEffect, useRef, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import Layout from '../layout';
import { Store } from '../../types';
import Redirect from './Redirect';
import { editPassword } from '../../ajax';
import { colors } from '../../styles';
import { capitalize } from '../../util';

interface ProfileState {
    changingPassword : boolean;
    currentPassword : string;
    newPassword : string;
    confirmNewPassword : string;
}

const Profile = () => {
    const user = useSelector(({ user } : Store) => user);
    const [state, setState] = useState<ProfileState>({
        changingPassword: false,
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const [error, setError] = useState<string>('');
    const [changingPassword, setChangingPassword] = useState<boolean>(false);
    const changePasswordBtn = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (changePasswordBtn?.current) {
            changePasswordBtn.current.style.backgroundColor = (changingPassword ? colors.LIGHTER : colors.GRAYSCALE[1]);
        }
    }, [changingPassword]);
    
    if (!user) return <Redirect />;

    const onChange = (e : FormEvent<HTMLInputElement>) => setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });

    const changePassword = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (state.newPassword !== state.confirmNewPassword) return setError('Passwords must match');
        try {
            await editPassword({ oldPass: state.currentPassword, newPass: state.newPassword });
            setError('');
        } catch (e) { setError(e); }
    }

    return (
        <div className="Profile">
            <h1 className="heading">{user && capitalize(user.username)}{user && (user.username.endsWith('s') ? "' " : "'s ")}Profile</h1>
            <div className="prompt">View and edit your account information here</div>
            <div className="error">{error}</div>
            <section>
                <button className="button" ref={changePasswordBtn} onClick={() => setChangingPassword(!changingPassword)}>Change Password</button>
                {changingPassword &&
                    <form onSubmit={changePassword}>
                        <input type="password" required name="currentPassword" placeholder="username" onChange={onChange} />
                        <input type="password" required name="newPassword" placeholder="new password" onChange={onChange} />
                        <input type="password" required name="confirmNewPassword" placeholder="confirm new password" onChange={onChange} />
                        <button>Submit</button>
                    </form>
                }
            </section>

            <style>{`
                .Profile .button {
                    padding: .6rem .8rem;
                    font-size: .9rem;
                    margin-bottom: 1.25rem;
                }

                .Profile form {
                    width: 15rem;
                    margin-bottom: 2rem;
                }
    
                .Profile .error {
                    margin-top: .5rem;
                }
            `}</style>
        </div>
    )
}

export default Layout(Profile);
