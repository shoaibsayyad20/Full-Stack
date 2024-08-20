function BookClick()
{
    document.getElementById("btnBooking").style.display= "none";
    document.getElementById("summaryContainer").style.display="block";

    movieName = document.getElementById("lstMovies").value;
    
    document.getElementById("lblMovies").innerText = movieName;
    document.getElementById("lblDate").innerText = document.getElementById("lstDate").value;
    document.getElementById("lblCinema").innerText = document.getElementById("lstCinema").value;
    document.getElementById("lblTiming").innerText = document.getElementById("lstTiming").value;


    if(movieName == "DEADPOOL AND WOLVERINE")
    {
        document.getElementById("banner").src = "../../public/assets/Deadpool.png";
    }
    else
    {
        document.getElementById("banner").src = "../../public/assets/Ulajh.png";
    }

}

function ModifyClick()
{
    document.getElementById("heading").innerText = "Modify Details";
    document.getElementById("book").innerText = "Save";
    document.getElementById("book").className = "btn btn-success";
}