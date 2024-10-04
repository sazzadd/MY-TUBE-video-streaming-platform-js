// get time function
function getTimeString(time) {
    const hour = parseInt(time / 3600);
    const remainingSecond = time % 3600;
    const minutes = parseInt(remainingSecond / 60);
    const second = remainingSecond % 60;
    return `${hour} hours ${minutes} minutes ${second} seconds ago`;
}


// load and show categories on html
const loadCategories = () =>{
    fetch ('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then ((res) => res.json())
    .then ((data) => DisplayCategories(data.categories))
    .catch ((error) => console.log(error));
}
// load video
const loadVideos = () =>{
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then ((res) => res.json())
    .then ((data) => DisplayVideos(data.videos))
    .catch ((error) => console.log(error));
}


// Display Categories
const DisplayCategories = (categories) =>{
    const categoryConatainer = document.getElementById('categories')
    
    categories.forEach((item) =>{
        // console.log(item);
        // create button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category
        // add button to category container
        categoryConatainer.append(button);
    })

}

// video onbject
const cardDemo = {
    category_id: "1001",
    video_id: "aaaa",
    thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
    title: "Shape of You",
    authors: [
        {
            profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
            profile_name: "Olivia Mitchell",
            verified: true,
        }
    ],
    others: {
        views: "100K",
        posted_date: "16278"
    },
    description: "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
}

// display video
const DisplayVideos = (videos) => {
    const videoConatainer = document.getElementById('video')
    videos.forEach(videos => {
        console.log(videos)
         const card = document.createElement('div');
         card.classList ='card card-compact'
         card.innerHTML= 
         `
           <figure class="h-[200px]">
                <img
                src= ${videos.thumbnail} 
                class= "h-full w-full object-cover"
                />
                ${videos.others.posted_date?.length == 0 ? "":`<span class="absolute right-2 bottom-[80px] bg-black rounded p-1 text-white">${getTimeString(videos.others.posted_date)}</span>`}
                
            </figure>
            <div class="px-0 py-2 flex">
                <div>
                    <img src class="w-10 h-10 rounded-full object-cover" src=${videos.authors[0].profile_picture} alt="profile">
                </div>
                <div>
                    <h2 class="font-bold">${videos.title}</h2>
                    <div class="flex items-center">
                        <p>${videos.authors[0].profile_name} </p>
                        // 
                        ${videos.authors[0].verified == true ? `<img  class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="">` : ""}
                    </div>
                    
                    <p class="text-gray-300"></p>
               </div>
            </div>
         `
         videoConatainer.append(card)
    })
}


loadCategories ();
loadVideos();
