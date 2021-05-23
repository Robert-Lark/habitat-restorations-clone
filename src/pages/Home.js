import React from "react";
import {useQuery, gql} from "@apollo/client";
import styled from "styled-components";
//IMAGES
import underline from "../assets/underline_alt_1.png";
import underline2 from "../assets/underline2.png";
import underline3 from "../assets/underline3.png";
import underline4 from "../assets/underline4.png";
import underline5 from "../assets/underline5.png";
import underline6 from "../assets/underline6.png";

const HOME_QUERY = gql`
  # Write your query or mutation here
  query {
    allHomepage {
      header0
      block0Raw
      image0 {
        asset {
          url
        }
      }
      header1
      block1Raw
      image1 {
        asset {
          url
        }
      }
      header2
      block2Raw
      specialities
      block2AndAHalfRaw
      image2 {
        asset {
          url
        }
      }
      header3
      block3Raw
      image3 {
        asset {
          url
        }
      }
      header4
      block4Raw
      weedingSpecialities
      image4 {
        asset {
          url
        }
      }
      header5
      block5Raw
      image5 {
        asset {
          url
        }
      }
      header6
      block6Raw
      image6 {
        asset {
          url
        }
      }
      header7
      block7Raw
      image7 {
        asset {
          url
        }
      }
      header8
      block8Raw
      image8 {
        asset {
          url
        }
      }
      header9
      block9Raw
      image9 {
        asset {
          url
        }
      }
    }
  }
`;

function Home(props) {
  const {loading, error, data} = useQuery(HOME_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const content = loading ? "" : data.allHomepage[0];
  console.log(content);
  return (
    <Container>
      {/* NZ IS SPECIAL */}
      <BlockLeft>
        <br></br>
        <Title0>
          {content.header0}
          <img src={underline} alt="heading underline" />
        </Title0>
        <Text0>{content.block0Raw[0].children[0].text}</Text0>
        <br></br>
        <Text0>{content.block0Raw[1].children[0].text}</Text0>
        <br></br>
        <br></br>
        <Image0>
          <img src={content.image0.asset.url} alt="first" />
        </Image0>
        <br></br>
        <br></br>
      </BlockLeft>

      {/* SERVICES */}
      <BlockLeft>
        <Title0>
          {content.header1}
          <img src={underline2} alt="heading underline" />
        </Title0>

        <Text0>{content.block1Raw[0].children[0].text}</Text0>
        <br></br>
        <Text0>{content.block1Raw[1].children[0].text}</Text0>
        <br></br>
        <Text0>{content.block1Raw[2].children[0].text}</Text0>
        <br></br>
        <br></br>
      </BlockLeft>

      {/* NATIVE PLANTING */}
      <BlockRight>
        <div>
          <Title1>
            {content.header2}
            <img src={underline3} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block2Raw[0].children[0].text}</Text1>
          <br></br>
          {content.specialities.map((work) => (
            <li style={{marginLeft: "20px"}}>{work}</li>
          ))}
          <br></br>
          <Text1>{content.block2AndAHalfRaw[0].children[0].text}</Text1>
        </div>
        <Image1>
          <img src={content.image1.asset.url} alt="third" />
        </Image1>
      </BlockRight>

      {/* PREDATOR CONTROL */}

      <BlockLeftWithImage>
        <InnerDiv>
          <br></br>
          <br></br>
          <Title1>
            {content.header3}
            <img src={underline4} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block3Raw[0].children[0].text}</Text1>
          <br></br>
        </InnerDiv>
        <Image1>
          <img src={content.image2.asset.url} alt="third" />
        </Image1>
      </BlockLeftWithImage>

      {/* WEED CONTROL */}

      <BlockRight>
        <div>
          <Title1>
            {content.header4}
            <img src={underline} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block4Raw[0].children[0].text}</Text1>
          <br></br>
          {content.weedingSpecialities.map((work) => (
            <li style={{marginLeft: "20px"}}>{work}</li>
          ))}
          <br></br>
        </div>
        <Image1>
          <img src={content.image3.asset.url} alt="third" />
        </Image1>
      </BlockRight>

      {/* OPPORTUNITIES */}

      <BlockLeftWithImage>
        <InnerDiv>
          <Title1>
            {content.header5}
            <img src={underline5} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block5Raw[0].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block5Raw[1].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block5Raw[2].children[0].text}</Text1>
          <br></br>
        </InnerDiv>
        <Image1>
          <img src={content.image4.asset.url} alt="third" />
        </Image1>
      </BlockLeftWithImage>

      {/* FUNDING */}

      <BlockRight>
        <div>
          <Title1>
            {content.header6}
            <img src={underline6} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block6Raw[0].children[0].text}</Text1>
          <br></br>
        </div>
        <Image1>
          <img src={content.image5.asset.url} alt="third" />
        </Image1>
      </BlockRight>

      {/* About Us */}

      <BlockLeftWithImage>
        <InnerDiv>
          <Title1>
            {content.header7}
            <img src={underline} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>{content.block7Raw[0].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block7Raw[1].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block7Raw[2].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block7Raw[3].children[0].text}</Text1>
          <br></br>
        </InnerDiv>

        <Image1>
          <br></br>
          <img src={content.image4.asset.url} alt="third" />
        </Image1>
      </BlockLeftWithImage>

      {/* GLEN RILEY */}

      <BlockLeftWithImage2>
        <InnerDiv>
          <Title1>
            {content.header8}
            <img src={underline} alt="heading underline" />
          </Title1>
          <br></br>
          <Text1>
            <span style={{color: "green"}}>
              {content.block8Raw[0].children[0].text}
            </span>{" "}
            {content.block8Raw[0].children[1].text}
          </Text1>
          <br></br>
          <Text1>{content.block5Raw[1].children[0].text}</Text1>
          <br></br>
          <Text1>{content.block5Raw[2].children[0].text}</Text1>
          <br></br>
        </InnerDiv>
        <Image1>
          <img src={content.image7.asset.url} alt="third" />
        </Image1>
      </BlockLeftWithImage2>
    </Container>
  );
}

const Container = styled.div`
  width: 99vw;
`;

const BlockLeft = styled.div`
  text-align: left;
  background-color: #faf9f7;
`;
const Title0 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5%;
  img {
    width: 15vw;
  }
  color: #4c6f39;
  font-size: 2rem;
`;
const Text0 = styled.div`
  padding: 0 5%;
`;
const Image0 = styled.div`
  img {
    width: 99vw;
  }
`;

const BlockRight = styled.div`
  text-align: left;
  background-color: #f2efea;
  display: flex;
  flex-direction: row-reverse;
`;
const Title1 = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 15vw;
  }
  color: #4c6f39;
  font-size: 2rem;
`;

const Text1 = styled.div``;
const Image1 = styled.div``;
const BlockLeftWithImage = styled.div`
  background-color: #faf9f7;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const InnerDiv = styled.div`
  margin-top: -35px;
  width: 50vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const BlockLeftWithImage2 = styled.div`
  background-color: #f2efea;
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default Home;
