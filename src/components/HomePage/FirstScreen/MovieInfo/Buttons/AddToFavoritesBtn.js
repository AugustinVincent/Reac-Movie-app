import React from 'react'
import './Buttons.css'
function AddToFavoritesBtn(props) {

    const adddFavorite = () =>
    {
        let alreadyInList = false
        props.favoritesMovies.forEach(moveItem => {
            if(props.movie === moveItem) alreadyInList = true
        });

        if(!alreadyInList) props.favoritesMovies.push(props.movie)
        console.log(props.favoritesMovies)
    }
    return (
            <div onClick={adddFavorite}className="add-favorites-btn">
                <span>Add to your favorites</span>
                <img src="https://icon-library.com/images/white-heart-icon/white-heart-icon-23.jpg" alt="" className="favorite-btn"/>
            </div>
    )
}

export default AddToFavoritesBtn