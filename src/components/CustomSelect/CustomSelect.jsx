import { useState } from 'react';
import Select from 'react-select';

const optionsManagers = [
    { value: '+78332308698', label: 'Горячая линия' },
    { value: '+79091444155', label: 'Алексей Гилязов' },
    { value: '+79195011005', label: 'Виктор Кормщиков' },
    { value: '+79536882847', label: 'Степан Макаров' }
];

export default function CustomSelect() {
    const [selectPhone, setSelectPhone] = useState('+78332308698');

    return (
        <Select
            value={optionsManagers.find(option => option.value === selectPhone)}
            onChange={(option) => setSelectPhone(option.value)}
            options={optionsManagers}
            placeholder="Выберите менеджера"

        />
    );
}