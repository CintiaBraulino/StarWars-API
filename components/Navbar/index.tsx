import { AppBar, Button, Link, Stack, Toolbar, Typography } from "@mui/material"
import ButtonDarkMode from '../ButtonDarkMode'
import logo from '../../assets/logo.png'
import Image from "next/image"

const Navbar = () => {
    return(
        <AppBar position='static' color='transparent'>
            <Toolbar>
                <Typography variant = 'h6' component ='div' sx={{ flexGrow: 1 }}>
                    <Link href={'/'}>
                    <Image src={logo} alt="Star Wars" width={100} height={50} />
                    </Link>
                </Typography>
                
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' href="/people"> CHARACTERS </Button>
                    <Button color='inherit' href="/films"> MOVIES </Button>
                    <Button color='inherit' href="/starships"> STARSHIPS </Button>
                    <Button color='inherit' href="/vehicles"> VEHICLES </Button>
                    <Button color='inherit' href="/planets"> PLANETS </Button>
                    <Button color='inherit' href="/species"> SPECIES </Button>
                </Stack>
                <ButtonDarkMode/>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;