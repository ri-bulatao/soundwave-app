import React, { useEffect } from 'react'
import { Accordion } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { type RootState } from '../../redux/store'
import './index.scss'
import { setCurrentActiveAccordion, setCurrentStep } from '../../redux/reducers/controls'
import { setTotalPrice } from '../../redux/reducers/checkout'
interface AccordionProps {
  eventKey: string
}

const OrderReviewAccordion: React.FC<AccordionProps> = ({ eventKey }) => {
  const { selected } = useSelector((state: RootState) => state.selected)
  const { orientation } = useSelector((state: RootState) => state.canvas)
  const { price } = useSelector((state: RootState) => state.checkout)
  const dispatch = useDispatch()

  const updateTotalPrice = (): void => {
    const payload = {
      product: selected.product,
      size: selected.size
    }

    dispatch(setTotalPrice(payload))
  }

  const updateCurrentStep = (): void => {
    dispatch(setCurrentStep('order'))
    dispatch(setCurrentActiveAccordion('2'))
  }

  useEffect(() => {
    updateTotalPrice()
  }, [selected.size, selected.product])

  return (
    <Accordion.Item onClick={() => updateCurrentStep} eventKey={eventKey}>
      <Accordion.Header>
        <div className='upload-header'>
          <div>
            <div>
              <svg className='accordion-icon' width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 10H5M7 14H5M13 6H5M17 5.8V16.2C17 17.8802 17 18.7202 16.673 19.362C16.3854 19.9265 15.9265 20.3854 15.362 20.673C14.7202 21 13.8802 21 12.2 21H5.8C4.11984 21 3.27976 21 2.63803 20.673C2.07354 20.3854 1.6146 19.9265 1.32698 19.362C1 18.7202 1 17.8802 1 16.2V5.8C1 4.11984 1 3.27976 1.32698 2.63803C1.6146 2.07354 2.07354 1.6146 2.63803 1.32698C3.27976 1 4.11984 1 5.8 1H12.2C13.8802 1 14.7202 1 15.362 1.32698C15.9265 1.6146 16.3854 2.07354 16.673 2.63803C17 3.27976 17 4.11984 17 5.8Z" stroke="#767676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Order Review
            </div>
            <p className='upload-desc'>Here is your order details:</p>
          </div>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <ul className="order-preview-container">
          <li className="order-item">
            ORIENTATION<strong>{orientation}</strong>
          </li>
          <li className="order-item">
            FRAME TYPE<strong>{selected.product !== null ? selected.product.title : ''}</strong>
          </li>
          <li className="order-item">
            SIZE<strong>{selected.size.title}</strong>
          </li>
          <li className="order-item">
            TOTAL PRICE<strong>{`${price.total} ${price.code}`}</strong>
          </li>
        </ul>
      </Accordion.Body>
    </Accordion.Item>
  )
}

export default OrderReviewAccordion
