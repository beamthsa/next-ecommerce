import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }} as="header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Next E-commerce
          </Typography>

          <Button color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
