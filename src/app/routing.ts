import { RouterModule, Routes } from '@angular/router';
import { AvatartSampleComponent } from './avatar/avatar.sample';
import { BadgeSampleComponent } from './badge/badge.sample';
import { ButtonSampleComponent } from './button/button.sample';
import { CalendarSampleComponent } from './calendar/calendar.sample';
import { CardSampleComponent } from './card/card.sample';
import { CarouselSampleComponent } from './carousel/carousel.sample';
import { DatePickerSampleComponent } from './date-picker/date-picker.sample';
import { DialogSampleComponent } from './dialog/dialog.sample';
import { DragDropSampleComponent } from './drag-drop/drag-drop.sample';
import { MaskSampleComponent } from './mask/mask.sample';
import { IconSampleComponent } from './icon/icon.sample';
import { InputSampleComponent } from './input/input.sample';
import { InputGroupSampleComponent } from './input-group/input-group.sample';
import { LayoutSampleComponent } from './layout/layout.sample';
import { ListSampleComponent } from './list/list.sample';
import { ListPerformanceSampleComponent } from './list-performance/list-performance.sample';
import { NavbarSampleComponent } from './navbar/navbar.sample';
import { NavdrawerSampleComponent } from './navdrawer/navdrawer.sample';
import { ProgressbarSampleComponent } from './progressbar/progressbar.sample';
import { RippleSampleComponent } from './ripple/ripple.sample';
import { SliderSampleComponent } from './slider/slider.sample';
import { SnackbarSampleComponent } from './snackbar/snackbar.sample';
import { ColorsSampleComponent } from './styleguide/colors/color.sample';
import { ShadowsSampleComponent } from './styleguide/shadows/shadows.sample';
import { TypographySampleComponent } from './styleguide/typography/typography.sample';
import { BottomNavSampleComponent, CustomContentComponent } from './bottomnav/bottomnav.sample';
import { TabsSampleComponent } from './tabs/tabs.sample';
import { TimePickerSampleComponent } from './time-picker/time-picker.sample';
import { ToastSampleComponent } from './toast/toast.sample';
import { VirtualForSampleComponent } from './virtual-for-directive/virtual-for.sample';
import { GridCellEditingComponent } from './grid-cellEditing/grid-cellEditing.component';
import { GridSampleComponent } from './grid/grid.sample';
import { GridColumnMovingSampleComponent } from './grid-column-moving/grid-column-moving.sample';
import { GridColumnPinningSampleComponent } from './grid-column-pinning/grid-column-pinning.sample';
import { GridColumnResizingSampleComponent } from './grid-column-resizing/grid-column-resizing.sample';
import { GridSummaryComponent } from './grid-summaries/grid-summaries.sample';
import { GridPerformanceSampleComponent } from './grid-performance/grid-performance.sample';
import { GridSelectionComponent } from './grid-selection/grid-selection.sample';
import { GridToolbarSampleComponent } from './grid-toolbar/grid-toolbar.sample';
import { GridVirtualizationSampleComponent } from './grid-remote-virtualization/grid-remote-virtualization.sample';
import { ButtonGroupSampleComponent } from './buttonGroup/buttonGroup.sample';
import { DropDownSampleComponent } from './drop-down/drop-down.sample';

const appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/avatar'
    },
    {
        path: 'avatar',
        component: AvatartSampleComponent
    },
    {
        path: 'badge',
        component: BadgeSampleComponent
    },
    {
        path: 'buttons',
        component: ButtonSampleComponent
    },
    {
        path: 'calendar',
        component: CalendarSampleComponent
    },
    {
        path: 'card',
        component: CardSampleComponent
    },
    {
        path: 'carousel',
        component: CarouselSampleComponent
    },
    {
        path: 'datePicker',
        component: DatePickerSampleComponent
    },
    {
        path: 'dialog',
        component: DialogSampleComponent
    },
    {
        path: 'dropDown',
        component: DropDownSampleComponent
    },
    {
        path: 'drag-drop',
        component: DragDropSampleComponent
    },
    {
        path: 'icon',
        component: IconSampleComponent
    },
    {
        path: 'inputs',
        component: InputSampleComponent
    },
    {
        path: 'input-group',
        component: InputGroupSampleComponent
    },
    {
        path: 'layout',
        component: LayoutSampleComponent
    },
    {
        path: 'list',
        component: ListSampleComponent
    },
    {
        path: 'listPerformance',
        component: ListPerformanceSampleComponent
    },
    {
        path: 'mask',
        component: MaskSampleComponent
    },
    {
        path: 'navbar',
        component: NavbarSampleComponent
    },
    {
        path: 'navdrawer',
        component: NavdrawerSampleComponent
    },
    {
        path: 'progressbar',
        component: ProgressbarSampleComponent
    },
    {
        path: 'ripple',
        component: RippleSampleComponent
    },
    {
        path: 'slider',
        component: SliderSampleComponent
    },
    {
        path: 'snackbar',
        component: SnackbarSampleComponent
    },

    {
        path: 'colors',
        component: ColorsSampleComponent
    },
    {
        path: 'shadows',
        component: ShadowsSampleComponent
    },
    {
        path: 'typography',
        component: TypographySampleComponent
    },
    {
        path: 'bottom-navigation',
        component: BottomNavSampleComponent
    },
    {
        path: 'tabs',
        component: TabsSampleComponent
    },
    {
        path: 'timePicker',
        component: TimePickerSampleComponent
    },
    {
        path: 'toast',
        component: ToastSampleComponent
    },
    {
        path: 'virtualForDirective',
        component: VirtualForSampleComponent
    },
    {
        path: 'gridCellEditing',
        component: GridCellEditingComponent
    },
    {
        path: 'grid',
        component: GridSampleComponent
    },
    {
        path: 'gridColumnMoving',
        component: GridColumnMovingSampleComponent
    },
    {
        path: 'gridColumnPinning',
        component: GridColumnPinningSampleComponent
    },
    {
        path: 'gridColumnResizing',
        component: GridColumnResizingSampleComponent
    },
    {
        path: 'gridSummary',
        component: GridSummaryComponent
    },
    {
        path: 'gridPerformance',
        component: GridPerformanceSampleComponent
    },
    {
        path: 'gridSelection',
        component: GridSelectionComponent
    },
    {
        path: 'gridToolbar',
        component: GridToolbarSampleComponent
    },
    {
        path: 'gridRemoteVirtualization',
        component: GridVirtualizationSampleComponent
    },
    {
        path: 'buttonGroup',
        component: ButtonGroupSampleComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
