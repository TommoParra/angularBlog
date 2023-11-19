import { Injectable } from '@angular/core';
import { singlePost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private allPosts: singlePost[] = []

  constructor() {
    this.allPosts = [
      {
        id: 2,
        title: "Ode to Red: The Fiery Heart of the Color Spectrum",
        excerpt: "Delve into the world of red, the color of passion, power, and love, and discover its captivating history, symbolism, and cultural significance.",
        text: `Red, the color of fire and blood, has captivated humanity since the dawn of time. Its fiery intensity evokes a range of emotions, from the ardent passion of lovers to the raw power of anger and danger. Red is the color of life itself, the pulsating rhythm of our hearts, the vibrant dance of our blood coursing through our veins.
    
        Throughout history, red has been imbued with profound symbolism, representing both positive and negative attributes. In many cultures, it's associated with love, passion, and vitality, while in others, it symbolizes danger, warning, and sacrifice. Red has adorned the robes of kings and queens, signifying their power and authority, while also becoming the color of revolution, signaling a call to arms against injustice.
    
        In the realm of art and design, red is a bold and audacious choice, capable of grabbing attention and making a statement. It's the color of love in romantic paintings, the fiery energy of abstract expressionism, and the vibrant strokes of pop art. Red is the color that demands to be noticed, a force to be reckoned with in the world of creative expression.
    
        So, the next time you encounter the color red, take a moment to appreciate its rich history, symbolism, and the powerful emotions it evokes. Embrace the fiery heart of the color spectrum, and let red ignite your passions and inspire your creativity.`,
        author: "The Scarlet Siren",
        image: "/assets/red.png",
        date: new Date("2023-12-06"),
        category: "Color Symbolism",
      },
      {
        id: 3,
        title: "The Radiant Sunshine of the Color Spectrum",
        excerpt: "Embrace the sunny disposition of yellow, the color of joy, optimism, and creativity, and discover its uplifting power to brighten our days and spark our imaginations.",
        text: `Yellow, the color of sunshine, evokes feelings of warmth, joy, and optimism. It's the color of laughter and happiness, a reminder of the simple pleasures of life that bring smiles to our faces. Yellow is the color of new beginnings, the budding flower reaching for the sun, the chick emerging from its shell, ready to face the world with wide-eyed wonder.
    
        In many cultures, yellow is associated with happiness, wisdom, and spiritual enlightenment. It's the color of Buddhist monks' robes, symbolizing their dedication to the path of enlightenment, and the color of Egyptian gods, representing their power and divinity. Yellow is also the color of friendship and camaraderie, bringing people together to share laughter and good cheer.
    
        In the realm of art and design, yellow is a versatile color that can evoke a range of emotions, from the cheerful exuberance of a child's painting to the tranquil serenity of a field of sunflowers. It's the color of van Gogh's vibrant sunflowers, the cheerful optimism of pop art, and the radiant warmth of modern design. Yellow is the color that brings light and joy into our homes, creating a space that feels welcoming and full of life.
    
        So, the next time you encounter the color yellow, let its sunny disposition brighten your day. Embrace its uplifting power to spark your imagination and bring a touch of joy to your life.`,
        author: "The Yellow Sunshine",
        image: "/assets/yellow.png",
        date: new Date("2023-12-07"),
        category: "Culture and Color",
      },
      {
        id: 4,
        title: "The Tranquil Embrace of Nature's Palette",
        excerpt: "Immerse yourself in the calming presence of green, the color of nature, harmony, and growth, and discover its ability to soothe our souls and connect us to the natural world.",
        text: `Green, the color of nature, evokes feelings of tranquility, harmony, and growth. It's the color of lush forests, sprawling meadows, and the serene depths of the ocean. Green is a symbol of life itself, the vibrant chlorophyll that fuels the growth of plants, the refreshing breeze rustling through leaves, and the calming sound of a babbling brook.
      
        In many cultures, green is associated with health, balance, and harmony. It's the color of traditional Chinese medicine, symbolizing the balance of yin and yang, and the color of Islam, representing paradise and eternal life. Green is also the color of environmentalism, signifying our connection to nature and our commitment to preserving its beauty and vitality.
      
        In the realm of art and design, green is a versatile and adaptable color that can evoke a range of emotions, from the tranquil serenity of a landscape painting to the vibrant energy of modern design. It's the color of Monet's lush gardens, the calming greens of a meditation room, and the refreshing accents of eco-friendly products. Green is the color that brings a sense of peace and harmony into our homes, creating a space that feels both natural and inviting.
      
        So, the next time you encounter the color green, let its calming presence soothe your soul and connect you to the natural world around you. Embrace its ability to promote balance, harmony, and growth, and allow it to inspire you to live a more mindful and sustainable life.`,
        author: "The Emerald Enclave",
        image: "/assets/green.png",
        date: new Date("2023-12-07"),
        category: "Color Psychology",
      },
      {
        id: 5,
        title: "The Soothing Serenity of the Sky and Sea",
        excerpt: "Explore the calming depths of blue, the color of peace, tranquility, and trust, and discover its ability to evoke a sense of serenity and quiet contemplation.",
        text: `Blue, the color of the sky and the sea, evokes feelings of peace, tranquility, and trust. It's the color of a clear sky on a summer day, the gentle waves lapping against the shore, and the soothing sound of a babbling brook. Blue is a symbol of serenity and quiet contemplation, inviting us to pause and breathe, to let go of our worries and embrace the present moment.
    
        In many cultures, blue is associated with spirituality, wisdom, and loyalty. It's the color of the Virgin Mary, symbolizing her purity and compassion, and the color of the sky, representing the divine realm above. Blue is also the color of corporate logos, conveying a sense of trust, reliability, and stability.
    
        In the realm of art and design, blue is a versatile color that can evoke a range of emotions, from the tranquil serenity of a Monet painting to the vibrant energy of modern design. It's the color of the deep blue sea in a seascape, the cool blues of a cityscape, and the calming blues of a bedroom retreat. Blue is the color that brings a sense of peace and tranquility into our homes, creating a space that feels serene and inviting.
    
        So, the next time you encounter the color blue, let its calming presence soothe your soul. Embrace its ability to evoke a sense of serenity and quiet contemplation, and allow it to wash away the stresses of the day.`,
        author: "The Blue Serenity",
        image: "/assets/blue.png",
        date: new Date("2023-12-08"),
        category: "Culture and Color",
      },
      {
        id: 6,
        title: "The Mystical Allure of Royalty and Enchantment",
        excerpt: "Delve into the enchanting world of purple, the color of royalty, mystery, and imagination, and discover its captivating history, symbolism, and cultural significance.",
        text: `Purple, the color of royalty and mystery, has captivated humanity for centuries. Its rich hue, a blend of red and blue, evokes a range of emotions, from the regal elegance of a king's crown to the mystical allure of a sorcerer's robes. Purple is the color of the twilight sky, the enchanting depths of a violet flower, and the enigmatic aura of a starry night.
    
        Throughout history, purple has been associated with royalty, power, and wealth. It was once the most expensive dye to produce, making it a symbol of luxury and exclusivity worn by emperors, kings, and queens. Purple is also the color of the Catholic Church, representing the authority and power of the papacy.
    
        In the realm of art and design, purple is a sophisticated and elegant color, capable of adding a touch of mystery and intrigue to any space. It's the color of Monet's water lilies, the vibrant purple hues of Van Gogh's irises, and the luxurious accents of modern design. Purple is the color that adds a touch of drama and sophistication to our homes, creating a space that feels both regal and inviting.
    
        So, the next time you encounter the color purple, let its mystical allure captivate your imagination. Embrace its enchanting power to transport you to a world of royalty, mystery, and endless possibilities.`,
        author: "The Purple Enigma",
        image: "/assets/purple.png",
        date: new Date("2023-12-09"),
        category: "Color Psychology",
      },
      {
        id: 7,
        title: "The Radiant Energy of Citrus and Sunshine",
        excerpt: "Embrace the vibrant energy of orange, the color of warmth, enthusiasm, and creativity, and discover its ability to infuse our lives with positivity and optimism.",
        text: `The color of citrus fruits and sunshine, evokes feelings of warmth, enthusiasm, and creativity. It's the color of a ripe orange plucked from the tree, the fiery glow of a sunset, and the cheerful energy of a child's laughter. Orange is a symbol of vitality and abundance, representing the harvest season and the promise of new beginnings.
      
        In many cultures, orange is associated with joy, communication, and social interaction. It's the color of the Hindu god Krishna, symbolizing his playful nature and love for life. It's also the color of traditional Indian weddings, representing happiness, prosperity, and new beginnings.
      
        In the realm of art and design, orange is a vibrant and energetic color that can add a touch of excitement and warmth to any space. It's the color of Gauguin's Tahitian landscapes, the bold hues of pop art, and the playful accents of modern design. Orange is the color that brings a sense of vitality and optimism into our homes, creating a space that feels both welcoming and uplifting.
      
        So, the next time you encounter the color orange, let its radiant energy infuse your life with positivity and enthusiasm. Embrace its ability to spark your creativity and ignite your passions, and allow it to remind you of the simple joys that life has to offer.`,
        author: "The Orange Zest",
        image: "/assets/orange.png",
        date: new Date("2023-12-09"),
        category: "Color Symbolism",
      },
      {
        "id": 8,
        "title": "The Delicate Charm of Romance and Femininity",
        "excerpt": "Explore the delicate charm of pink, the color of love, romance, and femininity, and discover its ability to evoke a sense of tenderness, compassion, and nurturing.",
        "text": "Pink, the color of cherry blossoms and rose petals, has long been associated with love, romance, and femininity. Its soft and gentle hue evokes a sense of tenderness, compassion, and nurturing, making it a popular choice for expressing affection and care.\n\nIn many cultures, pink is traditionally associated with women and girls, symbolizing innocence, purity, and beauty. It's the color of baby girls' dresses, romantic Valentine's Day gifts, and delicate lingerie. Pink is also the color of cherry blossoms in Japan, representing the fleeting beauty of life and the importance of cherishing each moment.\n\nIn the realm of art and design, pink is a versatile color that can evoke a range of emotions, from the delicate charm of a ballerina's tutu to the bold confidence of a modern art installation. It's the color of Renoir's rosy-cheeked nudes, the playful hues of pop art, and the soothing accents of a cozy bedroom retreat. Pink is the color that brings a touch of romance and femininity into our homes, creating a space that feels both inviting and comforting.\n\nSo, the next time you encounter the color pink, let its delicate charm awaken your romantic spirit and compassionate nature. Embrace its ability to evoke a sense of tenderness and care, and allow it to remind you of the beauty and power of love.",
        "author": "The Pink Panache",
        "image": "/assets/pink.png",
        "date": new Date("2022-12-09"),
        "category": "Color Psychology"
      },
      {
        "id": 9,
        "title": "The Enigmatic Elegance of Power and Mystery",
        "excerpt": "Delve into the enigmatic world of black, the color of power, mystery, and elegance, and discover its captivating ability to evoke a range of emotions, from sophistication and authority to intrigue and rebellion.",
        "text": "Black, the absence of color, has long been associated with power, mystery, and elegance. Its stark contrast to other colors makes it a bold and dramatic choice, capable of commanding attention and exuding an aura of sophistication and authority. Black is the color of tuxedos and formal attire, the sleek silhouettes of luxury cars, and the mysterious depths of the night sky.\n\nIn many cultures, black is associated with mourning and death, symbolizing the end of one chapter and the transition into the unknown. It's the color of mourning garments, the ominous darkness of a storm, and the impenetrable depths of the ocean. Black is also the color of rebellion and nonconformity, representing a break from societal norms and a desire to stand out from the crowd.\n\nIn the realm of art and design, black is a versatile and powerful color that can evoke a range of emotions, from the minimalist chic of modern design to the dramatic intensity of Gothic art. It's the color of Rembrandt's chiaroscuro portraits, the bold lines of graphic design, and the understated elegance of black and white photography. Black is the color that adds a touch of mystery and intrigue to our homes, creating a space that feels both sophisticated and enigmatic.\n\nSo, the next time you encounter the color black, let its enigmatic elegance captivate your imagination. Embrace its ability to evoke a range of emotions, from sophistication and authority to intrigue and rebellion, and allow it to inspire you to express yourself in bold and unique ways.",
        "author": "The Black Enigma",
        "image": "/assets/black.png",
        "date": new Date("2023-10-19"),
        "category": "Color Symbolism"
      },
      {
        "id": 10,
        "title": "The Purity and Simplicity of a Blank Canvas",
        "excerpt": "Embrace the purity and simplicity of white, the color of new beginnings, cleanliness, and peace, and discover its ability to evoke a sense of clarity, tranquility, and endless possibilities.",
        "text": "White, the absence of color, has long been associated with purity, cleanliness, and peace. Its pristine hue represents a blank canvas, a fresh start, and the promise of new beginnings. White is the color of freshly fallen snow, the delicate petals of a lily, and the serene expanse of a cloudless sky.\n\nIn many cultures, white is associated with spirituality, innocence, and perfection. It's the color of wedding dresses, symbolizing purity and new beginnings, and the color of religious garments, representing holiness and enlightenment. White is also the color of peace and tranquility, often used to create a calming and soothing atmosphere.\n\nIn the realm of art and design, white is a versatile and minimalist color that can evoke a range of emotions, from the crisp, clean lines of modern architecture to the ethereal beauty of a blank canvas. It's the color of minimalist interiors, the stark simplicity of contemporary art, and the delicate balance of negative space in photography. White is the color that brings a sense of clarity and tranquility into our homes, creating a space that feels both serene and inspiring.\n\nSo, the next time you encounter the color white, let its purity and simplicity inspire you to embrace new beginnings, cultivate inner peace, and express yourself with creativity and clarity.",
        "author": "The White Whisper",
        "image": "/assets/white.png",
        "date": new Date("2023-12-12"),
        "category": "Culture and Color"
      }
    ];

  }

  private moveFeaturedToFirst(posts: singlePost[]): singlePost[] {
    const featuredPostIndex = posts.findIndex(post => post.featured === true);

    if (featuredPostIndex !== -1) {
      // Move the first post with featured=true to the beginning
      const featuredPost = posts.splice(featuredPostIndex, 1)[0];
      posts.unshift(featuredPost);
    }

    return posts;
  }


  private truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }



  getAll(): singlePost[] {
    const postsWithFeaturedMoved = this.moveFeaturedToFirst([...this.allPosts]);

    return postsWithFeaturedMoved.map(post => ({
      ...post,
      text: this.truncateText(post.text, post.featured ? 700 : 200)
    }));
  }

  getPostById(postID: number): singlePost | undefined {
    return this.allPosts.find(post => post.id === postID);

  }

}
