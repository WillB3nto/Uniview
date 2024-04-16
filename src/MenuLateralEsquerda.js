import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

function MenuEsquerdo() {
    return(
        <div>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                        <ListItemButton component={Link} to="/admin?disciplinas">
                            <ListItemText primary="Disciplinas" />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton component={Link} to="/admin?turmas">
                            <ListItemText primary="Turmas" />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton component={Link} to="/admin?professores">
                            <ListItemText primary="Professores" />
                        </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                        <ListItemButton component={Link} to="/admin?alunos">
                            <ListItemText primary="Alunos" />
                        </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
      </div>
    )
}

export default MenuEsquerdo;