import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '360px',
  margin: '0 auto',
  paddingTop: '30vh',
})

export const title = style({
  fontSize: '24px',
  fontWeight: 700,
})

export const description = style({
  fontSize: '14px',
  color: vars.colors.gray,
})

export const form = style({
  display: 'flex',
  gap: '8px',
})

export const select = style({
  flex: 1,
  padding: '10px 12px',
  color: vars.colors.white,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const issueButton = style({
  padding: '10px 16px',
  fontWeight: 600,
  color: vars.colors.background,
  backgroundColor: vars.colors.point,
  borderRadius: '8px',
  transition: 'background-color 0.2s',
  selectors: {
    '&:hover:not(:disabled)': {
      backgroundColor: vars.colors.pointHover,
    },
    '&:disabled': {
      color: vars.colors.gray,
      backgroundColor: vars.colors.border,
      cursor: 'not-allowed',
    },
  },
})

export const listButton = style({
  padding: '10px',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})
