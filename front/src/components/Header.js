import styled from "styled-components";

const SHeader = styled.div`
    width:10%;height:95vh;background:none;position:fixed;z-index:2;top:0px;left:0px;text-align:center;align-items: center;
    display:flex;justify-content: space-between;writing-mode: vertical-rl;
    text-orientation: upright;padding-top:20px;
    p{
        font-size:20px;color:${((props)=> props.black ? 'black' : 'white')};
    }
`;

const Logo = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Tokyo+Zoo&display=swap');
    width:6%;height:30px;
    position:absolute;top:10px;left:47%;display:${((props)=>props.display ? 'flex' : 'none')};align-items: center;font-size:30px;
    font-family: 'Zen Tokyo Zoo', cursive;
`;

const Header = ({black, display}) => {
    
    return (
        <>
            <Logo display={display}>
                <p>attiane</p>
            </Logo>
                
            <SHeader black={black}>
                <p>HOME</p>
                <p>MAN</p>
                <p>WOMAN</p>
                <p>KIDS</p>
                <p>ETC</p>
            </SHeader>

        </>
    )
};

export default Header;