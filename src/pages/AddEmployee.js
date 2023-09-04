
import { Box, Heading, Flex, Icon, FormControl, Input, Text, FormLabel, Checkbox, Radio, Select, Grid } from "@chakra-ui/react"
import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaSearch, FaBell, FaEnvelope, FaComments } from "react-icons/fa";
import Switch from "react-switch";
import { Link } from 'react-router-dom';

const AddEmployee = () => {

 const [name, setName] = useState("");
 const [cpf, setCpf] = useState("");
 const [rg, setRg] = useState("");
 const [sexo, setSexo] = useState("");
 const [dataNascimento, setDataNascimento] = useState("");
 const [cargo, setCargo] = useState("");

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
     >
      <Text textAlign={"center"} fontSize={24} fontWeight={"bold"} > <h1>Lorem Ipsum</h1></Text><hr /> <br />

      Lorem ipsum dolor sit amet. At ullam totam et soluta recusandae aut labore provident est ratione soluta eum galisum similique et quibusdam reiciendis. Non illum odit aut sunt quidem aut sunt ipsa ex quia inventore ad beatae atque qui sapiente nesciunt qui iure quis. Sed provident architecto et nihil ipsam qui tempore enim sed saepe ipsum.
      Qui repudiandae temporibus non accusantium dolor et delectus asperiores. Aut consequatur officiis aut voluptas voluptas cum doloribus enim qui quas repellat est alias iste. Est vero sunt non officia quam quo natus laboriosam aut molestiae veritatis aut ipsum laboriosam sit eius autem eum earum porro.
     </Text>


     <Flex marginRight={-40} align="start" bg="white" borderRadius={10} p={6} flex="1" mt={-10} height="1000px">
      <FormControl >
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
        paddingLeft={4}
       >
        <Text padding="8px" >
         Adicionar funcionário
        </Text>
       </Heading>

       <Box
        border='1px'
        h={10}
        borderRadius={6}
        color={"#20B2AA"}
        mt={2}
        pl={2}
        pr={2}
        pt={2}
       >
        <Flex alignItems="center" justifyContent="space-between">
         <Text>
          O trabalhador está ativo ou inativo?
         </Text>
         <Switch
          onChange={() => setEtapaConcluida(!etapaConcluida)}
          checked={etapaConcluida}
          onColor="#DCDCDC"
          height={22}
          onHandleColor="#20B2AA"
          handleDiameter={22}
          uncheckedIcon={<span style={{ fontSize: 14, color: "#000", }}>Não</span>}
          checkedIcon={<span style={{ fontSize: 14, color: "#000", padding: 4 }}>Sim</span>}
          boxShadow="0px 1px 1px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 1px rgba(0, 0, 0, 0.2)"
         />
        </Flex>
       </Box>

       <Box
        border="1px solid"
        borderColor="#20B2AA"
        borderRadius={6}
        p={4}
        mt={4}
        display="flex"
       >
        <Box flex="1" pr={2} >
         <FormLabel mb={1}>Nome</FormLabel>
         <Input
          type="text"
          mb={2}
          borderColor="#20B2AA"
          value={name}
          onChange={(e) => setName(e.target.value)}
         />
         <FormLabel mb={1}>CPF</FormLabel>
         <Input
          type="text"
          mb={2}
          borderColor="#20B2AA"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
         />
         <FormLabel mb={1}>RG</FormLabel>
         <Input
          type="text"
          mb={2}
          borderColor="#20B2AA"
          value={rg}
          onChange={(e) => setRg(e.target.value)}
         />
        </Box>
        <Box flex="1" pl={2} >
         <FormLabel mt={0} >Sexo</FormLabel>
         <Flex mb={5}>
          <Radio
           value="masculino"
           mr={14}
           checked={sexo === "masculino"}
           onChange={() => setSexo("masculino")}>
           Masculino
          </Radio>
          <Radio
           value="feminino"
           checked={sexo === "feminino"}
           onChange={() => setSexo("feminino")}>
           Feminino
          </Radio>
         </Flex>
         <FormLabel mb={1}>Data de Nascimento</FormLabel>
         <Input
          type="text"
          mb={2}
          borderColor="#20B2AA"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
         />
         <FormLabel mb={1}>Cargo</FormLabel>
         <Select
          borderColor="#20B2AA"
          mb={2}
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Selecione um cargo"
         >
          <option value="gerente">Gerente</option>
          <option value="supervisor">Supervisor</option>
          <option value="analista">Analista</option>
         </Select>
        </Box>
       </Box>
       <Box
        border='1px'
        h="44vh"
        borderRadius={6}
        color={"#20B2AA"}
        mt={2}
        pl={2}
        pr={2}
        pt={2}
       >
        <Text color={"black"}>
         Quais EPIs o trabalhador usa na atividade?
        </Text>
        <FormControl p={2} color={"black"}>
         <Flex alignItems="center">
          <Checkbox />
          <FormLabel ml={1}>O trabalhador não usa EPI.</FormLabel>
         </Flex>
        </FormControl>
        <Box
         border='1px'
         h="22vh"
         borderRadius={6}
         color={"#20B2AA"}
         mt={2}
         pl={2}
         pr={2}
         pt={2}
        >
         <Text color={"black"}>
          Selecione a atividade atividade:
         </Text>
         <Select placeholder="  atividade: 1" color={"black"} borderColor="#20B2AA">
         </Select>
         <Flex >
          <Grid templateColumns="1fr 1fr" gap={4}>
           <Box>
            <FormLabel mb={1} color={'black'}>Selecione o EPI</FormLabel>
            <Select
             borderColor="#20B2AA"
             mb={2}
             value={cargo}
             onChange={(e) => setCargo(e.target.value)}
             color={"black"}
            >
             <option value="selecionar">Selecionar</option>
             <option value="bota">Bota</option>
             <option value="luva">Luva</option>
             <option value="capacete">Capacete</option>
            </Select>
           </Box>
           <Box>
            <FormLabel mb={1} color={'black'}>Informe o número do CA:</FormLabel>
            <Flex flexDirection="row" align="center">
             <Input type="text" mb={2} borderColor="#20B2AA" />
             <Text
              marginLeft={2}
              color={"black"}
              mr={-1}
             >
              Adicionar EPI
             </Text>
            </Flex>
           </Box>

          </Grid>
         </Flex>
         <Input
          textAlign={"center"}
          mt={4}
          color="#20B2AA"
          placeholder="Adicionar outra atividade"
         >
         </Input>
        </Box>
       </Box>

       <Box
        border='1px'
        h="22vh"
        borderRadius={6}
        color={"#20B2AA"}
        mt={2}
        pl={2}
        pr={2}
        pt={2}
       >
        <Text
         color={"black"}
         fontWeight={"bold"}
        >Adicione Atestado de Saúde Ocupacional (opcional):
        </Text>
        <Input
         mt={2}
         placeholder="Documento 1.png"
        >
        </Input>
        <Input
         textAlign={"center"}
         mt={2}
         placeholder="Selecione arquivo"

        >
        </Input>
       </Box>

       <Flex pt={2} justifyContent="flex-end" borderRadius={8} textAlign="right">
       </Flex>
       <Input
        fontSize={20}
        fontWeight={"bold"}
        type="text"
        placeholder="Salvar"
        textAlign={"center"}
        mt={4}
        bg={"#20B2AA"}
        h={14}
        onClick={handleSubmit}
        sx={{ '::placeholder': { color: 'white' } }}
       />
      </FormControl>
     </Flex>
    </Box>
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
export default AddEmployee;