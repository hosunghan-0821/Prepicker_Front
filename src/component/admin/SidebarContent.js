import { styled } from '@mui/system';
import Button from '@mui/material/Button';



export default function SidebarContent(props){


    const contentName= props.contentName;
    const handleClick = ()=>{
        alert("div click event ");
    }

    const StyledButton = styled(Button)({

        backgroundColor:'cornflowerblue',
        width:'100%',
        display:'block',
        '&:hover': {
            backgroundColor: '#1E90FF',
        },
        padding: '20px 0px 20px 0px',
        // textAlign: 'center',
        borderWidth: '1px', /* 테두리의 두께를 1px로 설정합니다 */
        borderStyle: 'solid', /* 실선 스타일을 선택합니다 */
        borderColor: 'white' /* 파란색을 선택합니다 */
    });

    return (
        <StyledButton onClick={handleClick}  variant='contained' >
           {contentName}
        </StyledButton>
    );
}