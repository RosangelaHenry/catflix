import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  FieldContainer,
  FormStyled,
  Invalid,
  TitleForm,
} from "../../components/Form";
import TextSmall from "../../components/Form/TextSmall";
import TextLarge from "../../components/Form/TextLarge";
import Select from "../../components/Form/SelectInput";
import ButtonsForm from "../../components/Form/ButtonsForm";
import { Dialog } from "@mui/material";
import { DialogBox, Hyperlink } from "../../components/UI";
import { BsCheck2Circle } from "react-icons/bs";
import { grayColorLight__1, successColor } from "../../components/UI/variables";

const SuccessfullyIcon = styled(BsCheck2Circle)`
  color: ${successColor};
  font-size: 8rem;
`;

const DialogText = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: ${grayColorLight__1};
`;

export default function NewVideo({ categoryData, submitFunction }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");

  const [idVideo, setIdVideo] = useState("");
  useEffect(() => setIdVideo(getYouTubeVideoIdByUrl(link)), [link]);

  const [submitted, setSubmitted] = useState(false);

  function renderInvalid(name, value, setFunction, label, isLink) {
    let newError = {};

    if (value.replace(/\s/g, "") === "") {
      newError[name] = <Invalid>{label} é obrigatório.</Invalid>;
      setFunction("");
    } else if (isLink && !value.includes("youtu")) {
      newError[name] = <Invalid>O vídeo precisa ser do YouTube.</Invalid>;
      setFunction("");
    } else if (isLink && getYouTubeVideoIdByUrl(value) === null) {
      newError[name] = <Invalid>Link inválido.</Invalid>;
      setFunction("");
    } else newError[name] = "";

    setError({ ...error, ...newError });
  }

  function clearInputs() {
    setTitle("");
    setLink("");
    setCategory("");
    setDescription("");
    setError("");
  }

  function checkRepeatVideo(id) {
    let repeat = false;

    categoryData
      .filter((data) => data.category === category)[0]
      .videos.map((video) => {
        if (video.id === id) {
          setError({ linkVideo: <Invalid>URL já existente.</Invalid> });
          repeat = true;
        }
        return video;
      });

    return repeat;
  }

  function getYouTubeVideoIdByUrl(url) {
    const reg =
      /^(https?:)?(\/\/)?((www\.|m\.)?youtube(-nocookie)?\.com\/((watch)?\?(feature=\w*&)?vi?=|embed\/|vi?\/|e\/)|youtu.be\/)([\w\-]{10,20})/i;
    const match = url.match(reg);
    if (match) {
      return match[9];
    } else {
      return null;
    }
  }

  return (
    <main>
      <FormStyled
        onSubmit={(e) => {
          e.preventDefault();

          if (!checkRepeatVideo(idVideo)) {
            submitFunction(title, idVideo, category, description);
            setUrl(`/${category.toLowerCase().replace(/\s/g, "")}/${idVideo}`);
            clearInputs();
            setSubmitted(true);
          }
        }}
      >
        <TitleForm>Novo Vídeo</TitleForm>

        <FieldContainer>
          <TextSmall
            name="title"
            label="Título"
            type="text"
            value={title}
            setFunction={setTitle}
            invalidFunction={renderInvalid}
          />
          {error.title}
        </FieldContainer>

        <FieldContainer>
          <TextSmall
            name="linkVideo"
            label="Link do vídeo"
            type="text"
            value={link}
            setFunction={setLink}
            invalidFunction={renderInvalid}
            isLink
          />
          {error.linkVideo}
        </FieldContainer>

        <Select
          name="category"
          label="Categoria"
          value={category}
          options={categoryData.map((data) => data.category)}
          setFunction={setCategory}
        />

        <FieldContainer>
          <TextLarge
            name="description"
            label="Descrição do vídeo"
            type="text"
            value={description}
            setFunction={setDescription}
            invalidFunction={renderInvalid}
          />
          {error.description}
        </FieldContainer>

        <ButtonsForm clearFunction={clearInputs} />
      </FormStyled>

      <Dialog open={submitted} onClose={() => setSubmitted(false)}>
        <DialogBox>
          <SuccessfullyIcon />
          <DialogText>Video salvo com sucesso!</DialogText>

          <Hyperlink to={url} style={{ alignSelf: "flex-end" }}>
            Ir para o vídeo →
          </Hyperlink>
        </DialogBox>
      </Dialog>
    </main>
  );
}
