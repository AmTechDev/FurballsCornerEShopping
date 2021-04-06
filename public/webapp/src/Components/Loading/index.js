import './loader.css';
export default function loading(props){
    return <div>
        <div className='absolute w-1/4 top-50 bg-blue border border-gray-400'>
        <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    </div>
}