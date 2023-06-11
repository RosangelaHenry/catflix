import React, { useEffect, useState } from "react";
import { MdDelete as IconDelete, MdEdit as IconEdit } from "react-icons/md";
import { Dialog } from "@mui/material";
import { ButtonPrimary, ButtonSecondary } from "../Button";
import { FieldContainer, FormStyled, Invalid } from "../Form";
import TextSmall from "../Form/TextSmall";
import ColorInput from "../Form/ColorInput";
import TextLarge from "../Form/TextLarge";
import { DialogBox, DialogBoxForm, Hyperlink, MarginMedium } from "../UI";
import {
  AlertIcon,
  ButtonContainer,
  Container,
  DialogText,
  CategoryCard,
  IconsBox,
  TitleDialog,
  VideoDialogBox,
  VideoCard,
  IconDeleteVideo,
  BackHyperLink,
  ErrorIcon,
  CategoryList,
} from "./elements";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function CategoriesList({
  data,
  deleteCategory,
  editCategory,
  deleteVideo,
  sortCategory,
}) {
  const [categoryClicked, setCategoryClicked] = useState("");
  const [videoClicked, setVideoClicked] = useState("");

  const [openAlertCategory, setOpenAlertCategory] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openVideoList, setOpenVideoList] = useState(false);
  const [openAlertVideo, setOpenAlertVideo] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#000000");
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");

  const [categoryList, setCategoryList] = useState(data);
  useEffect(() => sortCategory(categoryList), [categoryList]);
  useEffect(() => setCategoryList(data), [data]);

  function renderInvalid(name, value, setFunction, label) {
    let newError = {};

    if (value.replace(/\s/g, "") === "") {
      newError[name] = <Invalid>{label} é obrigatório.</Invalid>;
      setFunction("");
    } else newError[name] = "";

    setError({ ...error, ...newError });
  }

  function handleOpenAlert(e) {
    setOpenAlertCategory(true);
    setCategoryClicked(e.currentTarget.id);
  }

  function handleOpenEdit(e) {
    setError("");
    setCategoryClicked(e.currentTarget.id);

    const editData = data.filter(
      (item) => item.category === e.currentTarget.id
    )[0];
    setName(editData.category);
    setDescription(editData.description);
    setColor(editData.color);
    setVideos(editData.videos);

    setOpenEdit(true);
  }

  function checkVideos() {
    if (videos.length > 0) {
      return (
        <Hyperlink
          onClick={() => {
            setOpenVideoList(true);
            setOpenEdit(false);
          }}
        >
          Vídeos da categoria →
        </Hyperlink>
      );
    }
  }

  function renderDeleteCategory(category) {
    if (data.length > 1)
      return <IconDelete id={category} onClick={handleOpenAlert} />;
  }

  function renderDeleteVideo(videos, id) {
    if (videos.length > 1)
      return (
        <IconDeleteVideo
          id={id}
          onClick={(e) => {
            setVideoClicked(e.currentTarget.id);
            setOpenAlertVideo(true);
          }}
        />
      );
  }

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(categoryList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCategoryList(items);
  }

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="category-list">
          {(provided) => (
            <CategoryList
              className="category-list"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {categoryList.map((obj, index) => (
                <Draggable key={obj.url} draggableId={obj.url} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <CategoryCard style={{ borderColor: obj.color }}>
                        {obj.category}
                        <IconsBox>
                          <IconEdit
                            id={obj.category}
                            onClick={handleOpenEdit}
                          />
                          {renderDeleteCategory(obj.category)}
                        </IconsBox>
                      </CategoryCard>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </CategoryList>
          )}
        </Droppable>
      </DragDropContext>

      <Dialog
        open={openAlertCategory}
        onClose={() => setOpenAlertCategory(false)}
      >
        <DialogBox>
          <Container>
            <AlertIcon />
            <DialogText>
              Tem certeza que deseja deletar a categoria {categoryClicked}?
            </DialogText>
          </Container>
          <ButtonContainer>
            <ButtonSecondary onClick={() => setOpenAlertCategory(false)}>
              Não
            </ButtonSecondary>
            <ButtonPrimary
              primary
              onClick={() => {
                if (!deleteCategory(categoryClicked)) setOpenAlertError(true);

                setOpenAlertCategory(false);
              }}
            >
              Sim
            </ButtonPrimary>
          </ButtonContainer>
        </DialogBox>
      </Dialog>

      <Dialog
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <DialogBoxForm>
          <FormStyled
            onSubmit={(e) => {
              e.preventDefault();
              editCategory(categoryClicked, name, color, description);
              setOpenEdit(false);
            }}
          >
            <TitleDialog>Editar Categoria</TitleDialog>
            <Container>
              <ColorInput value={color} setFunction={setColor} />
              <FieldContainer>
                <TextSmall
                  name="name"
                  label="Nome"
                  type="text"
                  value={name}
                  setFunction={setName}
                  invalidFunction={renderInvalid}
                />
                {error.name}
              </FieldContainer>
            </Container>

            <FieldContainer>
              <TextLarge
                name="description"
                label="Descrição"
                type="text"
                value={description}
                setFunction={setDescription}
                invalidFunction={renderInvalid}
              />
              {error.description}
            </FieldContainer>
            {checkVideos()}
            <ButtonPrimary primary>Salvar</ButtonPrimary>
          </FormStyled>
        </DialogBoxForm>
      </Dialog>

      <Dialog
        open={openVideoList}
        onClose={() => setOpenVideoList(false)}
        maxWidth={"sm"}
        fullWidth={true}
      >
        <VideoDialogBox>
          <BackHyperLink
            onClick={() => {
              setOpenVideoList(false);
              setOpenEdit(true);
            }}
          >
            ← Voltar
          </BackHyperLink>

          {videos.map((obj, index) => (
            <VideoCard key={index}>
              {obj.title}
              {renderDeleteVideo(videos, obj.id)}
            </VideoCard>
          ))}

          <Dialog
            open={openAlertVideo}
            onClose={() => setOpenAlertVideo(false)}
          >
            <DialogBox>
              <Container>
                <AlertIcon />
                <DialogText>Tem certeza que deseja deletar o vídeo?</DialogText>
              </Container>
              <ButtonContainer>
                <ButtonSecondary onClick={() => setOpenAlertVideo(false)}>
                  Não
                </ButtonSecondary>
                <ButtonPrimary
                  primary
                  onClick={() => {
                    deleteVideo(categoryClicked, videoClicked);
                    setOpenAlertVideo(false);
                    setOpenVideoList(false);
                  }}
                >
                  Sim
                </ButtonPrimary>
              </ButtonContainer>
            </DialogBox>
          </Dialog>
        </VideoDialogBox>
      </Dialog>

      <Dialog open={openAlertError} onClose={() => setOpenAlertError(false)}>
        <DialogBox>
          <ErrorIcon />
          <DialogText style={{ textAlign: "center" }}>
            Ao menos uma das categorias deve possuir vídeos.
          </DialogText>
        </DialogBox>
      </Dialog>
    </>
  );
}
