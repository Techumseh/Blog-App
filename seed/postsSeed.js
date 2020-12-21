const db = require('../db/connection') // importing connection
const Post = require('../models/postModels') // importing post schema

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


// Set up seed post data
const main = async () => {
  const posts = 
    [
      {
        "name": "Salvador Gilbert",
        "imgURL": "https://randomuser.me/api/portraits/men/60.jpg",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus, tellus dapibus hendrerit faucibus, nulla nisl eleifend justo, non rhoncus ante lorem ultrices nisl. Pellentesque rhoncus laoreet justo non lobortis. Proin ut arcu auctor, efficitur eros in, feugiat mi. Mauris sit amet augue eu lorem viverra venenatis sed id justo."
      },
      {
        "name": "Daniel Patterson",
        "imgURL": "https://randomuser.me/api/portraits/men/8.jpg",
        "content": "Mauris aliquet mauris sit amet metus posuere, in venenatis libero bibendum. Duis vel lacus tincidunt, mattis turpis id, porta lacus. Aliquam libero orci, venenatis hendrerit imperdiet eu, vestibulum at erat. Morbi auctor dui quis est euismod, lobortis ultricies felis porta. Ut bibendum nisl nibh, quis venenatis nulla dapibus convallis. Vivamus rutrum sem pharetra massa maximus hendrerit. Ut tempor sem et ante vestibulum blandit."
      },
      {
        "name": "Arnold Rice",
        "imgURL": "https://randomuser.me/api/portraits/men/26.jpg",
        "content": "In risus magna, aliquet non volutpat sollicitudin, lacinia vitae orci. Sed porttitor est id metus blandit, ac gravida sapien scelerisque. Phasellus non sapien a tellus consequat convallis placerat vitae elit. Nulla lobortis tristique quam eget pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi fermentum quis urna eget dignissim."
      },
      {
        "name": "Rita Beck",
        "imgURL": "https://randomuser.me/api/portraits/women/58.jpg",
        "content": "Sed eros eros, elementum vel diam eget, blandit tristique urna. Cras magna magna, eleifend eu nibh non, facilisis mattis ipsum. Duis ultricies, massa sed finibus blandit, augue dolor efficitur odio, eu pretium enim massa vel libero. Vivamus elementum viverra tellus, posuere rhoncus odio euismod in. Morbi sit amet feugiat dolor."
      },
      {
        "name": "Sherri Larson",
        "imgURL": "https://randomuser.me/api/portraits/women/84.jpg",
        "content": "Nulla sollicitudin augue ex, sollicitudin venenatis urna vestibulum eu. Nulla sit amet massa a nisi vulputate ullamcorper nec a diam. Mauris purus est, fringilla in sapien sed, vestibulum porta odio. Ut justo orci, mattis mollis posuere ut, dictum fringilla est."
      },
      {
        "name": "Madison Daniels",
        "imgURL": "https://randomuser.me/api/portraits/women/46.jpg",
        "content": "Duis rutrum lorem ac eros tincidunt ullamcorper. Donec non magna tortor. Nulla volutpat nibh id erat interdum, a laoreet ipsum consequat. Integer eget suscipit tortor. Ut ornare lorem sed sem congue varius. Nullam ac ante accumsan, varius orci sit amet, auctor dui."
      }
    ]
  
  await Post.insertMany(posts);
  console.log("Created posts!");
}

// function to run seed post data
const run = async () => {
  await main();
  db.close();
}

// invoking function
run()