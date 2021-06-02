import React from 'react';
import styled from 'styled-components';

const CreditCardForm = () => {
  return (
    <Wrapper>
        <form>
            <Top>
                <label>
                    Card Number
                    <First type="number"></First>
                </label>
            </Top>
            
        <div>
            <label>
                Expiration Month
                <Drugi type="number"></Drugi>
            </label>
            <label>
                Expiration Year
                <Drugi type="number"></Drugi>
            </label>
        </div>
        
        <button>Save Changes</button>
        </form>
    </Wrapper>
  );
};

export default CreditCardForm;

const Wrapper = styled.div`
width: 700px;
margin: 0 auto;
position: relative;
left: 100px;
form {
    display: flex;
    flex-direction: column;
  
    div {
        display: flex; 
    }
    label{
        display: flex;
        flex-direction: column;
        margin: 18px 0;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #011f4b;
    }

    button {
        color: white;
        background-color: #1bc5bd;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 120px;
        padding: 9px;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    
}
`;
const Drugi = styled.input `
    
    margin-top: 3px;
    margin-right: 80px;
    padding: 9px;
    background: #f3f6f9;
    border-radius: 8px;
    border: none;
    height: 46px;
    width: 219px;
    &:focus {
        outline: none;
    }`

const Top = styled.div`
display: contents;

`
const First = styled.input `

    width: 540px;
    height: 46px;
    margin-top: 3px;
    padding: 9px;
    background: #f3f6f9;
    border-radius: 8px;
    border: none;
`