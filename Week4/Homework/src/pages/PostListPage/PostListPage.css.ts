import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const searchForm = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '20px',
})

export const searchInput = style({
  flex: 1,
  padding: '10px 12px',
  color: vars.colors.white,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const searchButton = style({
  padding: '10px 16px',
  fontWeight: 600,
  color: vars.colors.background,
  backgroundColor: vars.colors.point,
  borderRadius: '8px',
  selectors: {
    '&:disabled': {
      color: vars.colors.gray,
      backgroundColor: vars.colors.border,
      cursor: 'not-allowed',
    },
  },
})

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})
