import { useEffect, useState } from 'react';
import './MainSection.scss';

export default function MainSection() {
    const [fullPrice, setFullPrice] = useState('');
    const [discountPercent, setDiscountPercent] = useState('');
    const [discountAmount, setDiscountAmount] = useState('');
    const [priceWithDiscount, setPriceWithDiscount] = useState('');
    const [requiredСontribution, setRequiredСontribution] = useState('')
    const [money, setMoney] = useState('')
    const maxLimit = 6000000
    const required = 20

    function getFullPrice(event) {
        setFullPrice(event.target.value === '' ? 0 : +event.target.value);
    }

    function getDiscountPercent(event) {
        setDiscountPercent(event.target.value === '' ? 0 : +event.target.value);
    }

    function calculateDiscountAmount() {
        const amount = (fullPrice * discountPercent) / 100;
        setDiscountAmount(amount);
    }

    function calculatePriceWithDiscount() {
        const priceAfterDiscount = fullPrice - discountAmount;
        setPriceWithDiscount(priceAfterDiscount);
    }

    function calculateContribution(event) {
        event.preventDefault()
        const vznos = priceWithDiscount * required / 100
        if ((priceWithDiscount - vznos) > maxLimit) {
            setMoney(priceWithDiscount - maxLimit)
        } else {
            setMoney(priceWithDiscount * required / 100)
        }
    }

    useEffect(() => {
        calculateDiscountAmount();
    }, [fullPrice, discountPercent]);


    useEffect(() => {
        calculatePriceWithDiscount();
    }, [fullPrice, discountAmount]);


    return (
        <div className='main'>
            <div className='block left'>
                <p>Параметры ипотеки</p>
                <form>
                    <label>
                        <p>Стоимость объекта</p>
                        <input
                            onChange={getFullPrice}
                            value={fullPrice}
                            type="number"
                            placeholder='Стоимость'
                        />
                    </label>
                    <label>
                        <p>Размер скидки (%)</p>
                        <input
                            value={discountPercent}
                            onChange={getDiscountPercent}
                            type="number"
                            placeholder='Скидка'
                        />
                    </label>
                </form>
                <div>
                    <p>Размер скидки: {discountAmount.toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        minimumFractionDigits: 2
                    })} руб. руб.</p>
                </div>
                <div>
                    <p>Стоимость с учетом скидки: {priceWithDiscount.toLocaleString('ru-RU', {
                        style: 'currency',
                        currency: 'RUB',
                        minimumFractionDigits: 2
                    })} руб. руб.</p>
                </div>
            </div>
            <div className='block right'>
                <p>Лимит по ипотеке: 6 000 000 руб.</p>
                <p>Стоимость с учетом скидки: {priceWithDiscount.toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 2
                })} руб.</p>
                <p>Необходимый взнос: {money.toLocaleString('ru-RU', {
                    style: 'currency',
                    currency: 'RUB',
                    minimumFractionDigits: 2
                })} руб.</p>
                <p>Сумма кредита {priceWithDiscount - money} руб.</p>
                <button onClick={calculateContribution}>Get vznos</button>
            </div>
        </div>
    );
}