import React from 'react'
import './Buttons.css'
function AddToFavoritesBtn(props) {

    const adddFavorite = () =>
    {
        let alreadyInList = false
        props.favoritesMovies.forEach((moveItem, index) => {
            if(props.movie.id === moveItem.id)
            {
                const tempArray = JSON.parse(window.localStorage.getItem('FavoriteMovies'))
                tempArray.splice(index,1)
                window.localStorage.setItem('FavoriteMovies',  JSON.stringify(tempArray))
                props.favoritesMovies.splice(index,1)
                alreadyInList = true
                console.log(window.localStorage)
            } 
        });
        if(!alreadyInList)
        {
            const tempArray = JSON.parse(window.localStorage.getItem('FavoriteMovies'))
            tempArray.push(props.movie)
            window.localStorage.setItem('FavoriteMovies',  JSON.stringify(tempArray))
            props.favoritesMovies.push(props.movie)
            console.log(window.localStorage)
        } 
    }
    return (
            <div onClick={adddFavorite}className="add-favorites-btn">
                <span>Add to fav</span>
                <img src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg" alt="" className="favorite-btn"/>
            </div>
    )
}

export default AddToFavoritesBtn