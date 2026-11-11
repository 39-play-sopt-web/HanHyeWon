import { style } from '@vanilla-extract/css'
import { vars } from '../../styles/theme.css'

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 24px',
  borderBottom: `1px solid ${vars.colors.border}`,
})

export const part = style({
  padding: '4px 10px',
  fontSize: '12px',
  fontWeight: 600,
  color: vars.colors.point,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '999px',
})

export const nav = style({
  display: 'flex',
  gap: '20px',
  marginLeft: 'auto',
  fontSize: '14px',
  color: vars.colors.gray,
})
