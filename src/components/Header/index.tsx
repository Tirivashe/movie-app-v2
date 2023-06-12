import { Burger, Group, Header as MantineHeader, MediaQuery, TextInput } from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useStyles } from "./styles"
import { useStore } from "../../store"
// import Logo from "../Logo"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const { classes } = useStyles()
  const isNavOpen = useStore(state => state.isNavOpen)
  const toggleNav = useStore(state => state.toggleNav)
  const navigate = useNavigate()

  const showDashboard = () => {
    navigate('/')
  }

  return (
    <MantineHeader height={60} withBorder={false} fixed>
      <Group position="apart" align="center" px={30} sx={{ height: "100%" }}>
        <MediaQuery largerThan="md" styles={{ display: "none" }}>
          <Burger
            opened={isNavOpen}
            onClick={() => toggleNav()}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          {/* <Logo /> */}
          <div onClick={showDashboard}>Logo</div>
        </MediaQuery>
        <TextInput
          w="30%"
          placeholder="Search any movies..."
          variant="filled"
          icon={<IconSearch size="0.8rem"/>}
          classNames={{ input: classes.input }}
        />
      </Group>
    </MantineHeader>
  )
}

export default Header