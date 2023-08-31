
import { Box, Heading, Flex, Icon, FormControl, Input, Button, Text, Image, LinkProps, Textarea } from "@chakra-ui/react"
import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaSearch, FaBell, FaEnvelope, FaComments } from "react-icons/fa";
import Switch from "react-switch";
import { Link } from 'react-router-dom';

const Register = () => {

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [atividade, setAtividade] = useState(false);
  const [cargo, setCargo] = useState({
    name: "",
    cpf: "",
    atividade: "",
    cargo: "",
  });

  const [etapaConcluida, setEtapaConcluida] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados do funcionário para o backend ou fazer outras ações.
  };

  return (

    <Flex maxW="100%" h="100%" bg="#DCDCDC" >
      <Box
        p={8}
        pt={150}
        w="20px"
        bg="#20B2AA"
        boxShadow="md"
        display="flex"
        flexDirection="column"
        alignItems="center"
        borderRight={10}
        borderTopRightRadius="10px"
        borderBottomRightRadius="10px"
      >
        <SidebarIcon icon={FaHome} />
        <SidebarIcon icon={FaUser} />
        <SidebarIcon icon={FaCog} />
        <SidebarIcon icon={FaBell} />
        <SidebarIcon icon={FaEnvelope} />
        <SidebarIcon icon={FaSearch} />
      </Box>

      <Box p={4} flex="1" >
        <Flex bg="#20B2AA" borderRadius={10} justifyContent="flex-end" paddingEnd={16}>
          <Box display="flex" >
            <Box w={500} bg={"white"} m={2} borderRadius={10} mr={20}>
              <Text textAlign={'center'} pt={6} fontWeight={'bold'} fontSize={40}
              >
                Lorem Ipsum
              </Text>
            </Box>
            <Link to="/register">
              <IconBox icon={FaHome} label="Home" />
            </Link>

            <IconBox icon={FaUser} label="Funcionarios" />
            <IconBox icon={FaCog} label="Configurações" />
            <IconBox icon={FaBell} label="Avisos" />
            <IconBox icon={FaEnvelope} label="Mensagens" />
            <IconBox icon={FaComments} label="Chat" />
            <IconBox icon={FaSearch} label="Pesquisar" />
          </Box>
        </Flex>

        <Box mt={20} ml={20} mr={40} display="flex" justifyContent={"space-between"}>
          <Text
            m={8}
            p={8}
            bg={"white"}
            borderRadius={10}
            fontSize="18px"

            height="400px"
            marginLeft={-20}
            mt={-10}

          > <Text textAlign={"center"} fontSize={24} fontWeight={"bold"} > Lorem Ipsum</Text><hr /> <br />
            Lorem ipsum dolor sit amet. At ullam totam et soluta recusandae aut labore provident est ratione soluta eum galisum similique et quibusdam reiciendis. Non illum odit aut sunt quidem aut sunt ipsa ex quia inventore ad beatae atque qui sapiente nesciunt qui iure quis. Sed provident architecto et nihil ipsam qui tempore enim sed saepe ipsum.
            Qui repudiandae temporibus non accusantium dolor et delectus asperiores. Aut consequatur officiis aut voluptas voluptas cum doloribus enim qui quas repellat est alias iste. Est vero sunt non officia quam quo natus laboriosam aut molestiae veritatis aut ipsum laboriosam sit eius autem eum earum porro.
          </Text>

          <Flex marginRight={-40} align="start" bg="white" borderRadius={10} p={6} flex="1" mt={-10} height="400px">
            <FormControl  >
              <Heading
                borderTopRightRadius="10px"
                borderTopLeftRadius="10px"
                fontSize="24px"
                bg={"#20B2AA"}
                h={10}
                color={"white"}
                marginLeft={-6}
                marginRight={-6}
                w={800}
                mt={-6}
                paddingLeft={6}
                pt={1}
              >
                Funcionários(s)
              </Heading>

              <Link to="/add-employee">
                <Input
                  type="text"
                  placeholder="+ Adicionar Funcionário"
                  textAlign={"center"}
                  mt={4}
                  border={"1px"}
                  borderColor={"#20B2AA"}
                  h={14}
                />
              </Link>

              <Flex >
                <Input
                  textAlign={'center'}
                  type="text"
                  value={'Ver apenas ativos:'}
                  isReadOnly
                  mt={4}
                  bg="white"
                  border={"1px"}
                  borderColor={"#20B2AA"}
                  w={200}
                  h={8}
                  mr={1}
                />
                <Input
                  textAlign={"center"}
                  type="text"
                  value={'Limpar filtros'}
                  isReadOnly
                  mt={4}
                  bg="white"
                  border={"1px"}
                  borderColor={"#20B2AA"}
                  w={200}
                  h={8}
                  ml={1}
                />
              </Flex>
              <Box
                border={'1px'}
                color={"#20B2AA"}
                borderRadius={6}
                mt={4}
                h={180}
              >
                <Text m={4} textAlign={"center"} textColor={"black"} fontWeight={"bold"}>
                  <h1>Lorem Ipsum</h1><hr/><br/>
                  Aut consequatur officiis aut voluptas voluptas cum doloribus enim qui quas repellat est alias iste. Est vero sunt non officia quam quo natus laboriosam aut molestiae veritatis aut ipsum laboriosam sit eius autem eum earum porro.
                </Text>
              </Box>
              <Flex pt={2} justifyContent="flex-end" borderRadius={8} textAlign="right">
                <Text fontWeight="bold" mr={4}>
                  A etapa está concluída?
                </Text>
                <Switch
                  onChange={() => setEtapaConcluida(!etapaConcluida)}
                  checked={etapaConcluida}
                  onColor="#DCDCDC"
                  height={20}
                  onHandleColor="#20B2AA"
                  handleDiameter={20}
                  uncheckedIcon={<span style={{ fontSize: 14, color: "#000" }}>Não</span>}
                  checkedIcon={<span style={{ fontSize: 14, color: "#000" }}>Sim</span>}
                  boxShadow="0px 1px 1px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 1px rgba(0, 0, 0, 0.2)"
                />
              </Flex>
            </FormControl>
          </Flex>
        </Box>
        <Flex justifyContent="flex-end" p={0}>
          <Link to="/add-employee">
            <Button bg={"#20B2AA"} size="md" color={"white"}>
              Próximo Passo
            </Button>
          </Link>
        </Flex>
      </Box >
    </Flex >
  );

};

const SidebarIcon = ({ icon }) => (
  <Box
    mb="20px"
    p="10px"
    textAlign="center"
    bg="white"
    borderRadius={6}
    _hover={{ bg: "#20B2AA", color: "white" }}
  >
    <Icon as={icon} fontSize="24px" color="#20B2AA" />
    <Box fontSize="12px">{""}</Box>
  </Box>
);

const IconBox = ({ icon, label }) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    p={2}
    m={4}
    cursor="pointer"
    transition="transform 0.2s"
    _hover={{
      transform: "scale(1.1)",
    }}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="10%"
      border="2px solid #fff"
      color={"#20B2AA"}
      bg={"white"}
      p={3}
      mb={1}
    >
      <Icon as={icon} fontSize="24px" />
    </Box>
    <Text fontSize="14px" color={"White"}> {label}</Text>
  </Box>
);

export default Register;