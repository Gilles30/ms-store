import styled from 'styled-components'

export const ShoppingCartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 97%;
  height: 220px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px;
  margin: 13px 0;
  gap: 15px;
  @media screen and (min-width: 768px) {
    height: 101px;
  }
`

export const WrapperShoppingCart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const ProductName = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #2c2c2c;
`

export const Image = styled.img`
  width: 80px;
  height: 95.1px;
`

export const RemoveFromCartButton = styled.button`
  position: absolute;
  top: -5px;
  right: -5px;
  border: 0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  background-color: #000;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(1.2);
  }
`
