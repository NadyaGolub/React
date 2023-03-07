React

Рендер елементів у DOM-дерево

Створюємо компонент Арр в який будемо рендити всі наступні компоненти:

Створюємо якийсь компонент Функція:

export default function Painting({ image, name }){ return ( <div>
<img src={image} alt={name} width="480"/>

   </div>
    )

}; Стрілочна функція:

const Painting = ({ image, name }) => { return (

  <div>
<img src={image} alt={name} width="480"/>
</div>
    )

};

і по дефолту її експортуємо

export default Painting;

Далі імпортуємо в АРР сам компонент і дані пропсів (avatar, name - це пропси) А
також імпортуємо json документ де знаходяться дані

import Painting from "./Painting" import friends from "./friends.json";

export default function App() { return (

<div>
      <Painting image={friends[0].avatar} name={ friends[0].name} />
 </div>
  )

};

Отже в Painting ти оголошуєш дані { avatar, name } і шаблон, який потрібно
зарендерити. Потім в Арр передаєш дані <Painting avatar={friends[0].avatar}
name={ friends[0].name} />, необхідно рендерити.

Якщо ми не впевнені чи прийдуть якісь дані, припустимо ім'я, то можна поставити
дефолтне значення. name="відсутнє". Якщо ім'я прийде - дефолтне значення не
зарендериться:

---

const Painting = ({ image, name='відсутнє' }) => { return (

  <div>
<img src={image} alt={name} width="480"/>
</div>
    )
};
__________________________________________________________________________
