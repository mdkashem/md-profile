import { colors } from '../../styles';

const Footer = () => {
    return <footer>
        <span>
            <ul>
                <li>Md Abul Kashem</li>
               
            </ul>
            <div>&copy; 2020 ExamPro</div>
        </span>

        <style>{`
            footer, footer span {
                display: flex;
            }

            footer {
                justify-content: center;
                align-items: center;
                background-color: ${colors.GRAYSCALE[1]};
                color: ${colors.GRAYSCALE[5]};
                text-align: center;
            }

            footer span {
                flex-direction: column;
                gap: .5rem;
            }
            
            footer ul {
                gap: .65rem;
                margin-bottom: .25rem;
            }

            footer div {
                user-select: none;
            }

            footer div {
                user-select: none;
            }
        `}</style>
    </footer>
}

export default Footer;
