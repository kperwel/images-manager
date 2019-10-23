import { Image } from "../images/types";

const titles = [
  "Duis in viverra neque",
  "Cras ut suscipit urna",
  "Heroes Of The Eternal",
  "Fusce et lacus rhoncus",
  "Dolor sit ament",
  "Lorem ipsum",
  "Inspiration With Determination",
  "Vivamus rutrum pharetra nisi",
  "Sed consectetur sed turpis ac laoreet.",
  "Proin interdum nibh",
]

const descriptions = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut suscipit urna, ut laoreet tortor. Proin fringilla sapien metus, id consectetur ante auctor at. Nam tempus gravida diam a faucibus. Morbi ut mi dolor. Integer eu varius risus. Ut venenatis sollicitudin volutpat. Fusce venenatis tortor imperdiet risus fermentum, sit amet ultrices ante maximus. Nullam placerat felis eget tempus volutpat. Curabitur et pellentesque dui. Fusce laoreet finibus lorem id malesuada.",
  "Vestibulum scelerisque augue eu volutpat sollicitudin. Aenean a est id nisi tempor egestas at non mauris. Phasellus lacinia fermentum purus, vitae mollis odio dapibus eu. Maecenas nec nulla et massa lacinia tincidunt in vitae lectus. Fusce ante justo, pretium sed gravida vitae, tincidunt eu odio. Nam nec maximus ante. Vestibulum mollis, diam vitae iaculis blandit, nibh lorem vestibulum risus, in pellentesque mi mi et justo. Proin dolor justo, blandit auctor tincidunt a, consequat vitae lorem. Pellentesque laoreet mauris vitae diam cursus, eget aliquet mauris elementum."
]

export const createMock = (): Image[] => {
  return Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index.toString(),
      url: require(`../assets/image${index}.jpg`),
      thumb_url: require(`../assets/image${index}_thumb.jpg`),
      title: titles[index % titles.length],
      description: descriptions[index % descriptions.length]
    }));
};
