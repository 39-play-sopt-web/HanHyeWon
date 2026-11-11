import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
})

export const title = style({
  fontSize: '24px',
  fontWeight: 700,
})

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  fontSize: '14px',
})

export const input = style({
  padding: '10px 12px',
  color: vars.colors.white,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const textarea = style([
  input,
  {
    height: '200px',
    resize: 'none',
  },
])

export const helper = style({
  display: 'flex',
  fontSize: '12px',
})

export const error = style({
  color: vars.colors.error,
})

export const counter = style({
  marginLeft: 'auto',
  color: vars.colors.gray,
})

export const buttons = style({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '8px',
})

export const listButton = style({
  padding: '10px 16px',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const submitButton = style({
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
