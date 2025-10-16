import React, { useState } from 'react';
import {
  Box, Typography, Card, CardContent, Grid, Button, Chip, 
  TextField, InputAdornment, IconButton
} from '@mui/material';
import { IconDownload, IconSearch, IconStar, IconGitBranch } from '@tabler/icons-react';
import PageContainer from '../../../../modernize-dashboard/src/components/container/PageContainer';
import ModuleInstaller from '../../../../modernize-dashboard/src/services/ModuleInstaller';

const MarketplaceMain = () => {
  const [modules] = useState([
    { 
      id: 1, 
      name: 'Advanced CRM', 
      description: 'Enhanced CRM with AI lead scoring', 
      version: '2.1.0', 
      author: 'WebMonk Team', 
      rating: 4.8, 
      downloads: 1250,
      repo: 'https://github.com/webmonk/advanced-crm',
      installed: false,
      category: 'Sales'
    },
    { 
      id: 2, 
      name: 'E-commerce Integration', 
      description: 'Connect with Shopify, WooCommerce', 
      version: '1.5.2', 
      author: 'Community', 
      rating: 4.6, 
      downloads: 890,
      repo: 'https://github.com/webmonk/ecommerce-module',
      installed: true,
      category: 'Integration'
    },
    { 
      id: 3, 
      name: 'Advanced Analytics', 
      description: 'ML-powered business insights', 
      version: '3.0.1', 
      author: 'WebMonk Pro', 
      rating: 4.9, 
      downloads: 2100,
      repo: 'https://github.com/webmonk/advanced-analytics',
      installed: false,
      category: 'Analytics'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleInstall = async (moduleRepo) => {
    try {
      const result = await ModuleInstaller.installFromGitHub(moduleRepo);
      if (result.success) {
        alert(`Module ${result.module.name} installed successfully!`);
        // Refresh page to load new module
        window.location.reload();
      } else {
        alert(`Installation failed: ${result.error}`);
      }
    } catch (error) {
      alert(`Installation error: ${error.message}`);
    }
  };

  const filteredModules = modules.filter(module => 
    module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer title="Module Marketplace" description="Discover and Install Business Modules">
      <Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Module Marketplace</Typography>
          <TextField
            size="small"
            placeholder="Search modules..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconSearch size={20} />
                </InputAdornment>
              ),
            }}
            sx={{ width: 300 }}
          />
        </Box>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f8f9ff',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#e8eaff',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#5a67d8' }}>📦</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {modules.length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Available Modules
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#f0fff4',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#c6f6d5',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#38a169' }}>✅</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {modules.filter(m => m.installed).length}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Installed
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fffbf0',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7aa',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#d69e2e' }}>📈</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {modules.reduce((sum, m) => sum + m.downloads, 0).toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Total Downloads
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card sx={{ 
              backgroundColor: '#fff5f5',
              border: 'none',
              boxShadow: 'none',
              borderRadius: 2,
              p: 1
            }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: '16px !important' }}>
                <Box sx={{ 
                  backgroundColor: '#fed7d7',
                  borderRadius: '8px',
                  p: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '40px',
                  height: '40px'
                }}>
                  <Box sx={{ fontSize: '20px', color: '#e53e3e' }}>⭐</Box>
                </Box>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#1a202c', mb: 0.5 }}>
                    {(modules.reduce((sum, m) => sum + m.rating, 0) / modules.length).toFixed(1)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#718096', fontSize: '14px' }}>
                    Avg Rating
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {filteredModules.map((module) => (
            <Grid item xs={12} md={6} lg={4} key={module.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" justifyContent="space-between" alignItems="start" mb={2}>
                    <Typography variant="h6">{module.name}</Typography>
                    <Chip label={module.category} size="small" color="primary" />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" mb={2}>
                    {module.description}
                  </Typography>
                  
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <IconStar size={16} color="orange" />
                    <Typography variant="body2">{module.rating}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      • {module.downloads} downloads
                    </Typography>
                  </Box>
                  
                  <Box display="flex" alignItems="center" gap={1} mb={2}>
                    <IconGitBranch size={16} />
                    <Typography variant="body2" color="text.secondary">
                      v{module.version} by {module.author}
                    </Typography>
                  </Box>
                  
                  <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
                    {module.repo}
                  </Typography>
                </CardContent>
                
                <Box p={2} pt={0}>
                  {module.installed ? (
                    <Button fullWidth variant="outlined" disabled>
                      Installed
                    </Button>
                  ) : (
                    <Button 
                      fullWidth 
                      variant="contained" 
                      startIcon={<IconDownload />}
                      onClick={() => handleInstall(module.repo)}
                    >
                      Install
                    </Button>
                  )}
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default MarketplaceMain;