function About({ image, about }) {
  // This component displays information about the blog

  return (
    <aside>
      <img src={image} alt="blog logo" />

      <p>{about}</p>
    </aside>
  );
}

export default About;