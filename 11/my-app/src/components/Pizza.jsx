import React,{useState} from "react";

function Pizza(props){
    const [kolich, setkolich] = useState(1);
    
    const hidePlaceholder = () => {
        document.getElementById('diameter_placeholder').style.display = 'none';
    }
    const minus=()=>{
        setkolich(kolich > 1 ? kolich - 1 : 1);
    };

    const plus=()=>{
        setkolich(kolich + 1);
    };

    const ProductAlert=()=>{
        alert(`Количество заказанной пиццы: ${kolich}`);
    };

    return(
        <div class = "main_block">
            <div class = "top">
                <div class = "top_season">Хит сезона</div>
                <img src={props.pizzaimg} className="pizza_width" />
            </div>
            <div class = "bottom">
                <h1>Пеперони</h1>
                <p>Ничего лишнего! Томатный соус, колбаски Пеперони и Моцарела</p>
                <select class = "pizza_diam">
                    <option disabled selected id="diameter_placeholder">Диаметр</option>
                    <option>25 см</option>
                    <option>30 см</option>
                    <option>35 см</option>
                </select>
                <h1>От 550 Р</h1>
                <div class = "buy_poz">
                    <div class = "pizza_count">
                            <button class = "znaki" onClick={minus}>-</button>
                            <span>{kolich}</span>
                            <button class = "znaki" onClick={plus}>+</button>
                    </div>
                    <button class = "btn_magazi"onClick={ProductAlert}><img src={props.korzina} class = "korzina_img"/></button>
                </div>
            </div>
        </div>
    )
}
export default Pizza;